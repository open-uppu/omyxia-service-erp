import { Controller, Get, Post, Param, Body, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { AccountsService } from './accounts.service';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly service: AccountsService) {}

  @Get()
  list(@Req() req: Request, @Query('type') type?: string) {
    const tenantId = req.tenantContext?.tenantId || 'default-tenant';
    return this.service.list(tenantId, type);
  }

  @Get(':id')
  get(@Req() req: Request, @Param('id') id: string) {
    const tenantId = req.tenantContext?.tenantId || 'default-tenant';
    return this.service.get(tenantId, id);
  }

  @Post()
  create(@Req() req: Request, @Body() body: any) {
    const tenantId = req.tenantContext?.tenantId || 'default-tenant';
    return this.service.create(tenantId, body);
  }

  @Post('seed-thai')
  seedThai(@Req() req: Request) {
    const tenantId = req.tenantContext?.tenantId || 'default-tenant';
    return this.service.seedThaiChart(tenantId);
  }
}
