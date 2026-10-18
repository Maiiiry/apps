// SPDX-License-Identifier: AGPL-3.0-only
package migrations

import "embed"

// Files contains ordered, immutable schema migrations.
//
//go:embed *.sql
var Files embed.FS

const Version = 5
