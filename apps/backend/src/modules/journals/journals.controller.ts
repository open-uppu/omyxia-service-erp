import { Controller, Get, Post, Param, Body, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { JournalsService } from './journals.service';

@Controller('journals')
export class JournalsController {
  constructor(private readonly service: JournalsService) {}

  @Get()
  list(@Req() req: Request, @Query('status') status?: string) {
    const tenantId = req.tenantContext?.tenantId || 'default-tenant';
    return this.service.list(tenantId, status);
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

  @Post(':id/post')
  postEntry(@Req() req: Request, @Param('id') id: string) {
    const tenantId = req.tenantContext?.tenantId || 'default-tenant';
    const approvedBy = req.tenantContext?.userId || 'system-admin';
    return this.service.post(tenantId, id, approvedBy);
  }
}
