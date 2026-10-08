---
name: runtime-boundaries
description: Project version compatibility and cleanup at Vitest, React and Testing Library boundaries
---

# Runtime boundaries

A repository can use Vitest 3, 4 or 5. Read the installed version, not an unpinned `latest` description. V5-only references such as `vi.when` are not a reason to change dependencies. Use versioned docs when an API is absent.

## Cleanup after failure

Register teardown before exercising the behavior. Restore each kind of state with its matching API; clearing mock call history does not restore a stubbed global or environment variable.

```ts
import { afterEach, beforeEach, expect, test, vi } from 'vitest'

beforeEach(() => vi.useFakeTimers())
afterEach(() => {
  try {
    vi.clearAllTimers()
  } finally {
    vi.useRealTimers()
    vi.restoreAllMocks()
    vi.unstubAllGlobals()
    vi.unstubAllEnvs()
  }
})

test('runs only after the deadline', async () => {
  const notify = vi.fn()
  setTimeout(notify, 100)
  await vi.advanceTimersByTimeAsync(99)
  expect(notify).not.toHaveBeenCalled()
  await vi.advanceTimersByTimeAsync(1)
  expect(notify).toHaveBeenCalledTimes(1)
})
```

This isolated timer test discards remaining timers. When the application contract requires pending work to finish, flush the relevant timers before restoring the clock, inside the renderer's `act` where needed. Avoid draining an unbounded polling interval.

## React and DOM tests

- Prefer async user interactions with real timers unless time control is required.
- When using fake timers with user-event, provide its supported `advanceTimers` option and verify the installed combination. Do not use `delay: null` or a global Jest shim to conceal synchronization problems.
- Wrap manual timer updates that cause React state changes in awaited `act`. A Vitest callback example has no React rendering, so it does not demonstrate this integration.
- Automatic Testing Library cleanup depends on setup and globals availability. Register explicit `afterEach(cleanup)` only when the project's configuration needs it; do not duplicate existing hooks blindly.
- Wait for the specific state: finding a button establishes its presence, not that it is enabled.

Sources: [Vitest migration](https://vitest.dev/guide/migration/), [Vitest timers](https://vitest.dev/guide/mocking/timers), [Testing Library fake timers](https://testing-library.com/docs/using-fake-timers/), [React act](https://react.dev/reference/react/act).
