import { Module } from '@nestjs/common';
import { JournalsController } from './journals.controller';
import { JournalsService } from './journals.service';
import { PrismaService } from '../../common/prisma.service';

@Module({
  controllers: [JournalsController],
  providers: [JournalsService, PrismaService],
  exports: [JournalsService],
})
export class JournalsModule {}
