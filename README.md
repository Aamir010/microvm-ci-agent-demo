# microvm-ci-agent-demo

Tiny dependency-free Node.js app whose CI runs on a **GitHub Actions self-hosted
runner hosted inside an AWS Lambda MicroVM** — one fresh, isolated MicroVM per job,
launched from a Firecracker snapshot and self-terminating when the job ends.

Every push triggers `.github/workflows/ci.yml`, which targets
`runs-on: [self-hosted, microvm]`. Until a MicroVM-hosted runner comes online, jobs
simply queue — that's expected.
