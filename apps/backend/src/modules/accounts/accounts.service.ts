import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class AccountsService {
  constructor(private readonly prisma: PrismaService) {}

  async list(tenantId: string, type?: string) {
    return this.prisma.chartOfAccounts.findMany({
      where: { tenantId, ...(type && { type: type as any }) },
      orderBy: { code: 'asc' },
    });
  }

  async get(tenantId: string, id: string) {
    return this.prisma.chartOfAccounts.findFirst({
      where: { id, tenantId },
    });
  }

  async create(tenantId: string, data: any) {
    return this.prisma.chartOfAccounts.create({
      data: {
        ...data,
        tenantId,
        type: data.type as any,
        normalBalance: (data.normalBalance ?? 'DEBIT') as any,
      },
    });
  }

  async seedThaiChart(tenantId: string) {
    const defaultAccounts = [
      { code: '1000', name: 'Cash and Cash Equivalents', type: 'ASSET', normalBalance: 'DEBIT' },
      { code: '1100', name: 'Bank Accounts (Checking/Savings)', type: 'ASSET', normalBalance: 'DEBIT' },
      { code: '1200', name: 'Accounts Receivable (ลูกหนี้การค้า)', type: 'ASSET', normalBalance: 'DEBIT' },
      { code: '1300', name: 'Inventories (สินค้าคงเหลือ)', type: 'ASSET', normalBalance: 'DEBIT' },
      { code: '2000', name: 'Accounts Payable (เจ้าหนี้การค้า)', type: 'LIABILITY', normalBalance: 'CREDIT' },
      { code: '2100', name: 'Output VAT (ภาษีขาย)', type: 'LIABILITY', normalBalance: 'CREDIT' },
      { code: '2200', name: 'Withholding Tax Payable (ภาษีหัก ณ ที่จ่ายค้างจ่าย)', type: 'LIABILITY', normalBalance: 'CREDIT' },
      { code: '3000', name: 'Common Stock (ทุนจดทะเบียน)', type: 'EQUITY', normalBalance: 'CREDIT' },
      { code: '3100', name: 'Retained Earnings (กำไรสะสม)', type: 'EQUITY', normalBalance: 'CREDIT' },
      { code: '4000', name: 'Sales Revenue (รายได้จากการขาย)', type: 'REVENUE', normalBalance: 'CREDIT' },
      { code: '4100', name: 'Service Revenue (รายได้จากการบริการ)', type: 'REVENUE', normalBalance: 'CREDIT' },
      { code: '5000', name: 'Cost of Goods Sold (ต้นทุนขาย)', type: 'EXPENSE', normalBalance: 'DEBIT' },
      { code: '5100', name: 'Salary & Wage Expenses (เงินเดือนและค่าจ้าง)', type: 'EXPENSE', normalBalance: 'DEBIT' },
      { code: '5200', name: 'Office Rental & Utilities (ค่าเช่าและสาธารณูปโภค)', type: 'EXPENSE', normalBalance: 'DEBIT' },
    ];

    const results = [];
    for (const acc of defaultAccounts) {
      const existing = await this.prisma.chartOfAccounts.findUnique({
        where: { tenantId_code: { tenantId, code: acc.code } },
      });
      if (!existing) {
        const created = await this.prisma.chartOfAccounts.create({
          data: {
            ...acc,
            tenantId,
            type: acc.type as any,
            normalBalance: acc.normalBalance as any,
          },
        });
        results.push(created);
      }
    }
    return { count: results.length, message: 'Thai Chart of Accounts seeded successfully' };
  }
}
