<p align="center">
  <img src="docs/assets/service-banner.svg" alt="Omyxia ERP Microservice Banner" width="100%">
</p>

<div align="center">

# 📊 Omyxia ERP Microservice (`omyxia-service-erp`)

### Decoupled Financial Ledgers, Invoicing, Thai Chart of Accounts & Tax Management

[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?logo=typescript)]()
[![NestJS](https://img.shields.io/badge/NestJS-10.3-E0234E?logo=nestjs)]()
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)]()
[![Prisma](https://img.shields.io/badge/Prisma-5.16-2D3748?logo=prisma)]()
[![License](https://img.shields.io/badge/License-AGPL--3.0-blue)]()

Part of the **[Omyxia Enterprise Microservices Ecosystem](https://github.com/open-uppu/omyxia-portal-shell)** (`open-uppu`).

[🏛️ Architecture](#-system-architecture) ·
[📸 UI Screenshots](#-visual-interface-showcase) ·
[💼 Core Domains](#-core-domains) ·
[🛠️ Quick Start](#-quick-start)

</div>

---

## 🏛️ System Architecture

<p align="center">
  <img src="docs/assets/architecture-topology.svg" alt="Omyxia Architecture Topology" width="100%">
</p>

* **Frontend Remote:** Next.js 14 on port `3002` (Exports `ErpRemoteModule` for App Shell federation)
* **Backend API:** NestJS on port `4002` (Prefix `/api/v1`)
* **Dedicated Database:** PostgreSQL database `omyxia_erp` managed via Prisma
* **Entitlement Perimeter:** Validates `X-Tenant-ID`, `X-Tenant-Plan`, and `X-User-Role` from Gateway

---

## 📸 Visual Interface Showcase

<table align="center" width="100%">
  <tr>
    <td align="center" width="60%">
      <img src="docs/screenshots/dashboard.png" alt="Omyxia ERP & Financial Dashboard" width="100%"><br>
      <sub><b>📊 Financial KPI Dashboard &amp; Analytics</b> — Revenue trend, account summaries, and expense analysis</sub>
    </td>
    <td align="center" width="40%">
      <img src="docs/screenshots/login.png" alt="Login Screen" width="100%"><br>
      <sub><b>🔐 Tenant SSO Integration</b></sub>
    </td>
  </tr>
</table>

---

## 💼 Core Domains

1. **Chart of Accounts (CoA):** Multi-tier account structure with pre-seeded Thai financial chart (สินทรัพย์, หนี้สิน, ส่วนของเจ้าของ, รายได้, ค่าใช้จ่าย)
2. **General Journal (GL):** Balanced double-entry transactions (Debit = Credit verification)
3. **Accounts Receivable (AR):** Invoicing, billing cycles, customer payment tracking
4. **Accounts Payable (AP):** Vendor bills, approval workflows, 3-way matching
5. **Tax & Withholding Tax:** Thai revenue department compliance (ภ.พ.30, ภ.ง.ด. 1/3/53)

---

## 🛠️ Quick Start

```bash
# Install dependencies
pnpm install

# Push schema to isolated database
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/omyxia_erp?schema=public" pnpm prisma db push

# Run Backend (:4002) & Frontend Remote (:3002)
pnpm --filter @omyxia/erp-backend dev
pnpm --filter @omyxia/erp-frontend dev
```

---

<p align="center">
  <sub>Licensed under AGPL-3.0 · Built by Omyxia Architecture &amp; Engineering Management</sub>
</p>
