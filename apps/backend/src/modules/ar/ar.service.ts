import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class ArService {
  constructor(private readonly prisma: PrismaService) {}

  async listInvoices(tenantId: string, status?: string) {
    return this.prisma.arInvoice.findMany({
      where: { tenantId, ...(status && { status: status as any }) },
      include: { customer: true },
      orderBy: { invoiceDate: 'desc' },
    });
  }

  async getInvoice(tenantId: string, id: string) {
    return this.prisma.arInvoice.findFirst({
      where: { id, tenantId },
      include: { customer: true },
    });
  }

  async createInvoice(tenantId: string, data: any) {
    const invoiceNo = data.invoiceNo || `INV-${Date.now().toString().slice(-6)}`;
    const subtotal = Number(data.subtotal || 0);
    const taxAmount = Number(data.taxAmount || (subtotal * 0.07));
    const total = subtotal + taxAmount;

    return this.prisma.arInvoice.create({
      data: {
        tenantId,
        invoiceNo,
        customerId: data.customerId,
        invoiceDate: new Date(data.invoiceDate || Date.now()),
        dueDate: new Date(data.dueDate || Date.now() + 30 * 24 * 60 * 60 * 1000),
        subtotal,
        taxAmount,
        total,
        paidAmount: data.paidAmount || 0,
        status: data.status || 'DRAFT',
        notes: data.notes,
      },
    });
  }

  async listCustomers(tenantId: string) {
    return this.prisma.customer.findMany({
      where: { tenantId },
      orderBy: { name: 'asc' },
    });
  }

  async createCustomer(tenantId: string, data: any) {
    return this.prisma.customer.create({
      data: {
        tenantId,
        code: data.code,
        name: data.name,
        taxId: data.taxId,
        email: data.email,
        phone: data.phone,
        address: data.address,
        creditLimit: data.creditLimit || 0,
        paymentTerms: data.paymentTerms || 30,
      },
    });
  }
}
