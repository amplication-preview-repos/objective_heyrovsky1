import { Tenant as TTenant } from "../api/tenant/Tenant";

export const TENANT_TITLE_FIELD = "active";

export const TenantTitle = (record: TTenant): string => {
  return record.active?.toString() || String(record.id);
};
