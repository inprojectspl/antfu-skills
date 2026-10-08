import { afterEach, expect, test, vi } from 'vitest'

// Mirrors the shared teardown in best-practices-runtime-boundaries.md.
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

test('deadline: not before 100ms, exactly once at 100ms', async () => {
  vi.useFakeTimers()
  const notify = vi.fn()
  setTimeout(notify, 100)
  await vi.advanceTimersByTimeAsync(99)
  expect(notify).not.toHaveBeenCalled()
  await vi.advanceTimersByTimeAsync(1)
  expect(notify).toHaveBeenCalledTimes(1)
})

test.fails('controlled assertion failure still restores timers and stubs', () => {
  vi.useFakeTimers()
  vi.stubGlobal('__inprojectsTimerProbe', true)
  vi.stubEnv('INPROJECTS_TIMER_PROBE', 'temporary')
  setTimeout(() => {}, 500)
  expect('actual').toBe('intentionally wrong')
})

test('the next test receives real clocks and no leaked stubs', async () => {
  expect(vi.isFakeTimers()).toBe(false)
  expect('__inprojectsTimerProbe' in globalThis).toBe(false)
  expect(process.env.INPROJECTS_TIMER_PROBE).toBeUndefined()
  await new Promise(resolve => setTimeout(resolve, 1))
})

test.fails('dynamic module mock is removed after an assertion failure', async () => {
  vi.doMock('./config', () => ({ apiUrl: 'http://mock.test' }))
  try {
    const { apiUrl } = await import('./config')
    expect(apiUrl).toBe('http://mock.test')
    expect(apiUrl).toBe('intentionally wrong')
  } finally {
    vi.doUnmock('./config')
    vi.resetModules()
  }
})

test('a subsequent import observes the original module', async () => {
  const { apiUrl } = await import('./config')
  expect(apiUrl).toBe('http://original.test')
})
