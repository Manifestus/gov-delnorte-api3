import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PropertyModule } from './property/property.module';
import { HistoryModule } from './history/history.module';
// import { TransactionModule } from './transaction/transaction.module';
// import { TransactionTypeModule } from './transaction-type/transaction-type.module';
// import { AuthorizationModule } from './authorization/authorization.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [
    UserModule,
    PropertyModule,
    HistoryModule,
    UploadModule,
    // //TransactionModule,
    // //TransactionTypeModule,
    // //AuthorizationModule,
  ],
  providers: [UserModule, PropertyModule, HistoryModule],
})
export class ApiModule {}
