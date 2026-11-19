import { Module } from '@nestjs/common';
import { FiscalPeriodsController } from './fiscal-periods.controller';
import { FiscalPeriodsService } from './fiscal-periods.service';
import { PrismaService } from '../../common/prisma.service';

@Module({
  controllers: [FiscalPeriodsController],
  providers: [FiscalPeriodsService, PrismaService],
  exports: [FiscalPeriodsService],
})
export class FiscalPeriodsModule {}
