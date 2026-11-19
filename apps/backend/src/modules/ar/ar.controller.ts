import { Controller, Get, Post, Param, Body, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { ArService } from './ar.service';

@Controller('ar')
export class ArController {
  constructor(private readonly service: ArService) {}

  @Get('invoices')
  listInvoices(@Req() req: Request, @Query('status') status?: string) {
    const tenantId = req.tenantContext?.tenantId || 'default-tenant';
    return this.service.listInvoices(tenantId, status);
  }

  @Get('invoices/:id')
  getInvoice(@Req() req: Request, @Param('id') id: string) {
    const tenantId = req.tenantContext?.tenantId || 'default-tenant';
    return this.service.getInvoice(tenantId, id);
  }

  @Post('invoices')
  createInvoice(@Req() req: Request, @Body() body: any) {
    const tenantId = req.tenantContext?.tenantId || 'default-tenant';
    return this.service.createInvoice(tenantId, body);
  }

  @Get('customers')
  listCustomers(@Req() req: Request) {
    const tenantId = req.tenantContext?.tenantId || 'default-tenant';
    return this.service.listCustomers(tenantId);
  }

  @Post('customers')
  createCustomer(@Req() req: Request, @Body() body: any) {
    const tenantId = req.tenantContext?.tenantId || 'default-tenant';
    return this.service.createCustomer(tenantId, body);
  }
}
