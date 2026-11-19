import { Controller, Get, Post, Body, Req } from '@nestjs/common';
import { Request } from 'express';
import { TaxService } from './tax.service';

@Controller('tax')
export class TaxController {
  constructor(private readonly service: TaxService) {}

  @Get('rates')
  listRates(@Req() req: Request) {
    const tenantId = req.tenantContext?.tenantId || 'default-tenant';
    return this.service.listRates(tenantId);
  }

  @Post('rates')
  createRate(@Req() req: Request, @Body() body: any) {
    const tenantId = req.tenantContext?.tenantId || 'default-tenant';
    return this.service.createRate(tenantId, body);
  }

  @Get('transactions')
  listTransactions(@Req() req: Request) {
    const tenantId = req.tenantContext?.tenantId || 'default-tenant';
    return this.service.listTransactions(tenantId);
  }

  @Get('summary')
  summary(@Req() req: Request) {
    const tenantId = req.tenantContext?.tenantId || 'default-tenant';
    return this.service.calculateTaxSummary(tenantId);
  }
}
