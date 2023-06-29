import { Global, Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UsersRepository } from '../repositories/users.repositories';
import { CategoriesRepository } from '../repositories/categories.repositories';
import { BankAccountsRepository } from '../repositories/bank-accounts.repositories';
import { TransactionsRepository } from '../repositories/transactions.repositories';

@Global()
@Module({
  providers: [
    PrismaService,
    CategoriesRepository,
    UsersRepository,
    BankAccountsRepository,
    TransactionsRepository,
  ],
  exports: [
    CategoriesRepository,
    UsersRepository,
    BankAccountsRepository,
    TransactionsRepository,
  ],
})
export class DatabaseModule {}
