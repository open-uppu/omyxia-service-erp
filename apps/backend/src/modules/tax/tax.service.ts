import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class TaxService {
  constructor(private readonly prisma: PrismaService) {}

  async listRates(tenantId: string) {
    return this.prisma.taxRate.findMany({
      where: { tenantId },
      orderBy: { type: 'asc' },
    });
  }

  async createRate(tenantId: string, data: any) {
    return this.prisma.taxRate.create({
      data: {
        tenantId,
        type: data.type as any,
        name: data.name,
        rate: data.rate,
        effectiveFrom: new Date(data.effectiveFrom || Date.now()),
        effectiveTo: data.effectiveTo ? new Date(data.effectiveTo) : null,
      },
    });
  }

  async listTransactions(tenantId: string) {
    return this.prisma.taxTransaction.findMany({
      where: { tenantId },
      include: { TaxRate: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async calculateTaxSummary(tenantId: string) {
    const transactions = await this.prisma.taxTransaction.findMany({
      where: { tenantId },
      include: { TaxRate: true },
    });

    let totalVat = 0;
    let totalWht = 0;

    for (const tx of transactions) {
      const type = tx.TaxRate.type;
      const amount = Number(tx.taxAmount);
      if (type.includes('VAT')) {
        totalVat += amount;
      } else if (type.includes('WHT')) {
        totalWht += amount;
      }
    }

    return {
      totalVat,
      totalWht,
      transactionCount: transactions.length,
    };
  }
}
