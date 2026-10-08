# Executed recipe checks

Verified 2026-10-08 on Node 26.3.0, Vitest 5.0.3 and Vite 8.3.3, using the committed npm lockfile.

```sh
cd evals
npm ci --ignore-scripts
npm test
```

Five tests pass, including two declared expected failures. Checks cover the 99/100 ms timer deadline, teardown after a deliberately failed assertion, restored globals and real timers, and dynamic module mock removal after failure. `npm audit` reported no vulnerabilities for this fixture lockfile at review time.

These execute representative corrected APIs; they are not a model behavior benchmark, an audit of every upstream reference, or proof of compatibility with every Vitest major. Match a real project's installed version before using examples. Documentation generation provenance stays at the reviewed upstream snapshot.
