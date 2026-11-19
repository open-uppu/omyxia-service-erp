import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class FiscalPeriodsService {
  constructor(private readonly prisma: PrismaService) {}

  async list(tenantId: string) {
    return this.prisma.fiscalPeriod.findMany({
      where: { tenantId },
      orderBy: { startDate: 'desc' },
    });
  }

  async create(tenantId: string, data: any) {
    return this.prisma.fiscalPeriod.create({
      data: {
        tenantId,
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
        status: data.status || 'OPEN',
      },
    });
  }

  async close(tenantId: string, id: string, closedBy: string) {
    return this.prisma.fiscalPeriod.update({
      where: { id },
      data: {
        status: 'CLOSED',
        closedAt: new Date(),
        closedBy,
      },
    });
  }
}
