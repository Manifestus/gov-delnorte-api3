import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PropertyModule } from './property/property.module';
import { HistoryModule } from './history/history.module';
// import { TransactionModule } from './transaction/transaction.module';
// import { TransactionTypeModule } from './transaction-type/transaction-type.module';
// import { AuthorizationModule } from './authorization/authorization.module';
import { InvoiceModule } from './invoice/invoice.module';
import { MediaModule } from './media/media.module';
import { StorageModule } from './storage/storage.module';
import { TransactionController } from './transaction/transaction.controller';
import { TransactionModule } from './transaction/transaction.module';
import { BearerModule } from './bearer/bearer.module';

@Module({
  imports: [
    UserModule,
    PropertyModule,
    TransactionModule,
    HistoryModule,
    InvoiceModule,
    MediaModule,
    StorageModule,
    BearerModule,
    // //TransactionModule,
    // //TransactionTypeModule,
    // //AuthorizationModule,
  ],
  providers: [
    UserModule,
    PropertyModule,
    HistoryModule,
    InvoiceModule,
    MediaModule,
    StorageModule,
    TransactionModule,
  ],
  controllers: [],
})
export class ApiModule {}
