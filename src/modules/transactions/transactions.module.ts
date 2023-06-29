import { Module } from '@nestjs/common';
import { TransactionsService } from './service/transactions.service';
import { TransactionsController } from './transactions.controller';
import { ValidateTransactionOwnershipService } from './service/validate-transaction-ownership.service';
import { BankAccountsModule } from '../bank-accounts/bank-accounts.module';
import { CategoriesModule } from '../categories/categories.module';

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService, ValidateTransactionOwnershipService],
  imports: [BankAccountsModule, CategoriesModule],
})
export class TransactionsModule {}
