import { Module } from '@nestjs/common';
import { TaxController } from './tax.controller';
import { TaxService } from './tax.service';
import { PrismaService } from '../../common/prisma.service';

@Module({
  controllers: [TaxController],
  providers: [TaxService, PrismaService],
  exports: [TaxService],
})
export class TaxModule {}
