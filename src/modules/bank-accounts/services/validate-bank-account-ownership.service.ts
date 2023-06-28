import { Injectable, NotFoundException } from '@nestjs/common';
import { BankAccountsRepository } from 'src/shared/database/repositories/bank-accounts.repositories copy';

@Injectable()
export class ValidateBankAccountOwnershipService {
  constructor(private readonly bankAccountRepo: BankAccountsRepository) {}

  async validate(userId: string, bankAccountId: string) {
    console.log(
      '🚀 ~ file: bank-accounts.service.ts:63 ~ BankAccountsService ~ isOwnerBankAccount ~ bankAccountId:',
      bankAccountId,
    );
    const isOwner = await this.bankAccountRepo.findFirst({
      where: { userId, id: bankAccountId },
    });

    if (!isOwner) {
      throw new NotFoundException('Bank Account not found');
    }
  }
}
