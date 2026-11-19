import { Controller, Get, Post, Param, Body, Req } from '@nestjs/common';
import { Request } from 'express';
import { FiscalPeriodsService } from './fiscal-periods.service';

@Controller('fiscal-periods')
export class FiscalPeriodsController {
  constructor(private readonly service: FiscalPeriodsService) {}

  @Get()
  list(@Req() req: Request) {
    const tenantId = req.tenantContext?.tenantId || 'default-tenant';
    return this.service.list(tenantId);
  }

  @Post()
  create(@Req() req: Request, @Body() body: any) {
    const tenantId = req.tenantContext?.tenantId || 'default-tenant';
    return this.service.create(tenantId, body);
  }

  @Post(':id/close')
  close(@Req() req: Request, @Param('id') id: string) {
    const tenantId = req.tenantContext?.tenantId || 'default-tenant';
    const closedBy = req.tenantContext?.userId || 'system-admin';
    return this.service.close(tenantId, id, closedBy);
  }
}
