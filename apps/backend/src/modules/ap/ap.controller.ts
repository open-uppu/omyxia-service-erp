import { Controller, Get, Post, Param, Body, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { ApService } from './ap.service';

@Controller('ap')
export class ApController {
  constructor(private readonly service: ApService) {}

  @Get('bills')
  listBills(@Req() req: Request, @Query('status') status?: string) {
    const tenantId = req.tenantContext?.tenantId || 'default-tenant';
    return this.service.listBills(tenantId, status);
  }

  @Get('bills/:id')
  getBill(@Req() req: Request, @Param('id') id: string) {
    const tenantId = req.tenantContext?.tenantId || 'default-tenant';
    return this.service.getBill(tenantId, id);
  }

  @Post('bills')
  createBill(@Req() req: Request, @Body() body: any) {
    const tenantId = req.tenantContext?.tenantId || 'default-tenant';
    return this.service.createBill(tenantId, body);
  }

  @Get('vendors')
  listVendors(@Req() req: Request) {
    const tenantId = req.tenantContext?.tenantId || 'default-tenant';
    return this.service.listVendors(tenantId);
  }

  @Post('vendors')
  createVendor(@Req() req: Request, @Body() body: any) {
    const tenantId = req.tenantContext?.tenantId || 'default-tenant';
    return this.service.createVendor(tenantId, body);
  }
}
