# Security architecture — commercial target

The HTML preview is a local prototype. It is **not** the production security boundary.

## Production controls
- Multi-tenant authorization enforced inside Postgres with Row Level Security on every exposed table.
- MFA/TOTP for privileged users and optionally all accounts.
- TLS for data in transit.
- Provider/database encryption at rest plus application-level authenticated encryption for especially sensitive fields when the threat model requires it. Keys must be managed outside source code and rotated.
- Passwords handled by the authentication provider; never stored by the application in plaintext or reversible encryption.
- Private object storage for images/PDFs. Access via short-lived signed URLs.
- File validation: allow-list MIME types/extensions, size limits, randomized object names, quarantine/scanning workflow before making files available.
- Immutable or append-only security/audit trail for critical actions.
- Least privilege roles and separation between owner/admin/manager/member/viewer.
- Secrets stored in a dedicated secrets manager / platform secrets, never in Git or client JavaScript.
- Backups, restore drills, versioning and incident response playbook.
- LGPD-oriented retention, export and deletion workflows.

## Important
"Best encryption" is not one algorithm. Security depends on architecture, key management, authorization, logging, patching, secure development and operational controls together.
