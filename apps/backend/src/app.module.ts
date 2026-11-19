import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AccountsModule } from './modules/accounts/accounts.module';
import { JournalsModule } from './modules/journals/journals.module';
import { ArModule } from './modules/ar/ar.module';
import { ApModule } from './modules/ap/ap.module';
import { TaxModule } from './modules/tax/tax.module';
import { FiscalPeriodsModule } from './modules/fiscal-periods/fiscal-periods.module';
import { TenantContextMiddleware } from './common/tenant-context.middleware';

@Module({
  imports: [
    AccountsModule,
    JournalsModule,
    ArModule,
    ApModule,
    TaxModule,
    FiscalPeriodsModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TenantContextMiddleware).forRoutes('*');
  }
}
