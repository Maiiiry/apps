# Environment contract

Commit only non-sensitive configuration, immutable tool versions and safe service-local examples. Never commit real environment files, credentials, signing material, `.infisical.json` or `.dev-environment/`. Delcore loads operator-owned configuration as specified by its server contract. The shells require no account credentials. Mobile release credentials belong to the protected `delitools-mobile` GitHub environment; configure its secrets, variables and branch restrictions in this repository before dispatch. Secret values cannot be retrieved or migrated through Git.
