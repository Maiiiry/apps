-- SPDX-License-Identifier: AGPL-3.0-only
CREATE TABLE allowance_grants (
 id uuid PRIMARY KEY, tenant_id uuid NOT NULL REFERENCES tenants(id),
 service_id uuid NOT NULL REFERENCES services(id),meter text NOT NULL,
 amount numeric NOT NULL CHECK(amount>=0),period_start timestamptz NOT NULL,
 period_end timestamptz NOT NULL,applied_at timestamptz NOT NULL,source_key text NOT NULL UNIQUE
);
