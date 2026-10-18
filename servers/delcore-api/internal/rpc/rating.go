// SPDX-License-Identifier: AGPL-3.0-only
package rpc

import (
	"github.com/delinoio/delino-apps/servers/delcore-api/internal/accounting"
	"github.com/delinoio/delino-apps/servers/delcore-api/internal/postgres"
	"time"
)

func (c *call) ratePeriod(tenant, service, meter string, start time.Time) (accounting.Decimal, accounting.Decimal, error) {
	return postgres.RatePeriod(c.ctx, c.tx, tenant, service, meter, start)
}
