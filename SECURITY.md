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

## Current prototype (V:1.19) — local protection
- Optional password: PBKDF2-SHA-256 (150,000 iterations) derives an AES-256-GCM key; every stored value gets a fresh random IV. The password is never stored, only an encrypted check value. The 5-attempt / 30-second lockout is enforced in the UI only; offline guessing is limited by PBKDF2 cost and password strength (the 4-character minimum is a deliberate product choice — longer passwords are recommended).
- The optional "send a copy to my own WhatsApp" message contains the password in plain text by design (a recovery convenience; it trades some secrecy for not losing data).
- Backups are plain, readable JSON and never include the password, the license, the trial state or the device ID.
- Pro license codes are bound to the device ID with a client-side checksum. This is a deterrent for honest users, not a security boundary (the algorithm is visible in the client code); real enforcement would require a server.
- Known limitation: free-text fields are not yet HTML-escaped everywhere in the UI, so text typed with `<` or `>` can render as markup on some screens (self-entered data only).
- Data lives in the browser's localStorage; there is no server component in this prototype.
