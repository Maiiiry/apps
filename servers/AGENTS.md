# servers working instructions

- Follow the root instruction-update policy and the nearest parent instructions.
- This file covers `servers/` and its descendants unless a more specific instruction file applies.
- Read the owning contracts below before changing behavior, including affected cross-domain consumers.

## Development and validation

- Follow root `AGENTS.md` and the owning project/domain contracts.

- Write Go code and comments in English; use `log/slog` structured logging and never log secrets or sensitive payloads.

## Owning contracts

- [project-delcore](../docs/project-delcore.md)
- [servers-delcore-api-contract](../docs/servers-delcore-api-contract.md)
- [protos-delcore-v1-contract](../docs/protos-delcore-v1-contract.md)
- [repository-environment-contract](../docs/repository-environment-contract.md)
