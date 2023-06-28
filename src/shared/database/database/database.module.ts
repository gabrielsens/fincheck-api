import { Global, Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UsersRepository } from '../repositories/users.repositories';
import { CategoriesRepository } from '../repositories/categories.repositories';
import { BankAccountsRepository } from '../repositories/bank-accounts.repositories copy';

@Global()
@Module({
  providers: [
    PrismaService,
    CategoriesRepository,
    UsersRepository,
    BankAccountsRepository,
  ],
  exports: [CategoriesRepository, UsersRepository, BankAccountsRepository],
})
export class DatabaseModule {}
