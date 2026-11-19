import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class ApService {
  constructor(private readonly prisma: PrismaService) {}

  async listBills(tenantId: string, status?: string) {
    return this.prisma.apBill.findMany({
      where: { tenantId, ...(status && { status: status as any }) },
      include: { vendor: true },
      orderBy: { billDate: 'desc' },
    });
  }

  async getBill(tenantId: string, id: string) {
    return this.prisma.apBill.findFirst({
      where: { id, tenantId },
      include: { vendor: true },
    });
  }

  async createBill(tenantId: string, data: any) {
    const billNo = data.billNo || `BILL-${Date.now().toString().slice(-6)}`;
    const subtotal = Number(data.subtotal || 0);
    const taxAmount = Number(data.taxAmount || 0);
    const whtAmount = Number(data.whtAmount || 0);
    const total = subtotal + taxAmount - whtAmount;

    return this.prisma.apBill.create({
      data: {
        tenantId,
        vendorId: data.vendorId,
        billNo,
        billDate: new Date(data.billDate || Date.now()),
        dueDate: new Date(data.dueDate || Date.now() + 30 * 24 * 60 * 60 * 1000),
        subtotal,
        taxAmount,
        whtAmount,
        total,
        paidAmount: data.paidAmount || 0,
        status: data.status || 'DRAFT',
        notes: data.notes,
      },
    });
  }

  async listVendors(tenantId: string) {
    return this.prisma.vendor.findMany({
      where: { tenantId },
      orderBy: { name: 'asc' },
    });
  }

  async createVendor(tenantId: string, data: any) {
    return this.prisma.vendor.create({
      data: {
        tenantId,
        code: data.code,
        name: data.name,
        taxId: data.taxId,
        email: data.email,
        phone: data.phone,
        address: data.address,
        paymentTerms: data.paymentTerms || 30,
      },
    });
  }
}
