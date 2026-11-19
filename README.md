# Omyxia ERP Microservice 📊

Decoupled Microservice for Enterprise Resource Planning (ERP), Finance, General Ledger, Accounts Payable, Accounts Receivable, and Tax Management.

Part of the **Omyxia Enterprise SaaS Ecosystem** (`open-uppu`).

## Architecture & Ports

* **Frontend Remote:** Next.js 14 on port `3002` (Exports `ErpRemoteModule` for App Shell federation)
* **Backend API:** NestJS on port `4002` (Prefix `/api/v1`)
* **Database:** Dedicated PostgreSQL database (`omyxia_erp`) managed via Prisma
* **Entitlement Perimeter:** Validates `X-Tenant-ID`, `X-Tenant-Plan`, and `X-User-Role` from Gateway

## Core Domains

1. **Chart of Accounts (CoA):** Multi-tier account structure with pre-seeded Thai financial chart (สินทรัพย์, หนี้สิน, ส่วนของเจ้าของ, รายได้, ค่าใช้จ่าย)
2. **General Journal (GL):** Balanced double-entry transactions (Debit = Credit verification)
3. **Accounts Receivable (AR):** Invoicing, billing cycles, payment tracking
4. **Accounts Payable (AP):** Vendor bills, approval workflows, 3-way matching
5. **Tax & Withholding Tax:** Thai revenue department compliance (ภ.พ.30, ภ.ง.ด. 1/3/53)

## Quick Start

```bash
# Install dependencies
pnpm install

# Setup database
pnpm db:push

# Run development servers
pnpm dev
```
