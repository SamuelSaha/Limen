# Deployment

## Target Environment

```
Hetzner CX22 (2 vCPU, 4GB RAM, 40GB SSD) — Falkenstein, DE
├── Coolify (self-hosted PaaS)
│   ├── limen (Nuxt 3 app, auto-deploy from GitHub)
│   └── postgresql (managed by Coolify)
├── Cloudflare (DNS + R2 file storage)
└── Sentry (error monitoring, cloud)
```

Monthly cost: ~€10-15.

## Initial Server Setup

### 1. Provision Hetzner VPS

- Create CX22 in Hetzner Cloud Console
- Select Falkenstein datacenter (EU data residency)
- Ubuntu 24.04 LTS
- Add SSH key

### 2. Install Coolify

```bash
ssh root@<server-ip>
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
```

Access Coolify at `https://<server-ip>:8000`. Complete initial setup.

### 3. Configure DNS

In Cloudflare:
- A record: `limen.app` → `<server-ip>` (proxy off for Coolify SSL)
- A record: `www.limen.app` → `<server-ip>`

### 4. Deploy Limen

In Coolify:

1. **Add GitHub source** — connect your GitHub account
2. **New Resource → Application**
   - Source: `SamuelSaha/Limen`, branch `main`
   - Build pack: Nixpacks (auto-detects Nuxt)
   - Port: 3000
3. **Environment variables** — copy from `.env.example`, fill real values
4. **Domain** — set to `limen.app`
5. **Deploy**

### 5. Database

In Coolify:

1. **New Resource → Database → PostgreSQL**
2. Note the connection string
3. Set `NUXT_DATABASE_URL` in the app's environment variables
4. SSH into the app container or use Coolify terminal:
   ```bash
   npm run db:push
   ```

### 6. Stripe Webhook

```bash
# Get the webhook signing secret from Stripe Dashboard
# Webhook URL: https://limen.app/api/payments/webhook
# Events: checkout.session.completed
```

Set `NUXT_STRIPE_WEBHOOK_SECRET` in Coolify environment variables.

## CI/CD

Coolify watches the `main` branch. Every push triggers:
1. Pull latest code
2. Nixpacks build (detects Nuxt, runs `npm run build`)
3. Deploy new container
4. Zero-downtime swap

No GitHub Actions needed for deployment.

## Backup

### Database

Coolify supports scheduled PostgreSQL backups. Configure in:
Coolify → Database → Backups → Schedule.

Target: daily backup to Coolify's local storage. For offsite, configure S3-compatible destination (Cloudflare R2).

### Files (R2)

R2 handles durability. No additional backup needed for uploaded files.

## Monitoring

- **Sentry**: errors, performance, session replay (free tier)
- **Coolify**: container health, resource usage, deployment logs
- **Stripe Dashboard**: payment monitoring, webhook delivery status

## Scaling Path

This setup handles the first ~1,000 users comfortably. When it's not enough:

| Bottleneck | Action |
|---|---|
| CPU/RAM | Upgrade to CX32 (€7.50/mo) or CX42 (€14.60/mo) |
| Database | Move PostgreSQL to dedicated VPS or Neon managed |
| Background jobs | Add Redis (Coolify) + BullMQ workers |
| Traffic spikes | Cloudflare CDN for static assets (already proxied) |
