import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class JournalsService {
  constructor(private readonly prisma: PrismaService) {}

  async list(tenantId: string, status?: string) {
    return this.prisma.journalEntry.findMany({
      where: { tenantId, ...(status && { status: status as any }) },
      include: { lines: { include: { ChartOfAccounts: true } } },
      orderBy: { date: 'desc' },
    });
  }

  async get(tenantId: string, id: string) {
    return this.prisma.journalEntry.findFirst({
      where: { id, tenantId },
      include: { lines: { include: { ChartOfAccounts: true } } },
    });
  }

  async create(tenantId: string, data: any) {
    // Validate that debits equal credits
    if (data.lines && Array.isArray(data.lines)) {
      const totalDebit = data.lines.reduce((acc: number, l: any) => acc + Number(l.debit || 0), 0);
      const totalCredit = data.lines.reduce((acc: number, l: any) => acc + Number(l.credit || 0), 0);
      if (Math.abs(totalDebit - totalCredit) > 0.001) {
        throw new BadRequestException(`Unbalanced journal entry: Total Debit (${totalDebit}) must equal Total Credit (${totalCredit})`);
      }
    }

    const entryNo = data.entryNo || `JV-${Date.now().toString().slice(-6)}`;

    return this.prisma.journalEntry.create({
      data: {
        tenantId,
        entryNo,
        date: new Date(data.date || Date.now()),
        description: data.description,
        reference: data.reference,
        status: data.status || 'DRAFT',
        lines: {
          create: (data.lines || []).map((line: any) => ({
            tenantId,
            accountId: line.accountId,
            debit: line.debit || 0,
            credit: line.credit || 0,
            description: line.description,
            costCenter: line.costCenter,
            project: line.project,
          })),
        },
      },
      include: { lines: true },
    });
  }

  async post(tenantId: string, id: string, approvedBy: string) {
    return this.prisma.journalEntry.update({
      where: { id },
      data: {
        status: 'POSTED',
        approvedBy,
        approvedAt: new Date(),
      },
    });
  }
}
