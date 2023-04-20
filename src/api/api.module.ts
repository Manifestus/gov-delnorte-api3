import { Module } from '@nestjs/common';
// import { UserModule } from './user/user.module';
// import { DocumentModule } from './document/document.module';
// import { PropertyModule } from './property/property.module';
// import { HistoryModule } from './history/history.module';
// import { TransactionModule } from './transaction/transaction.module';
// import { TransactionTypeModule } from './transaction-type/transaction-type.module';
// import { AuthorizationModule } from './authorization/authorization.module';

@Module({
  imports: [
    // UserModule,
    // DocumentModule,
    // PropertyModule,
    // HistoryModule,
    // //TransactionModule,
    // //TransactionTypeModule,
    // //AuthorizationModule,
  ],
  providers: [],
  // providers: [UserModule, PropertyModule, HistoryModule, DocumentModule],
})
export class ApiModule {}
