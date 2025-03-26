import type { App } from 'vue';
import { AccountService, accountServiceKey } from '../transactions/application/AccountService';
import { TransactionService, transactionServiceKey } from '../transactions/application/TransactionService';
import { AccountApiRepository } from '../transactions/infrastructure/secondary/AccountApiRepository';
import { TransactionApiRepository } from '../transactions/infrastructure/secondary/TransactionApiRepository';

export default {
  install: (app: App) => {
    // Create repositories
    const accountRepository = new AccountApiRepository();
    const transactionRepository = new TransactionApiRepository();

    // Create services with repository dependencies
    const accountService = new AccountService(accountRepository);
    const transactionService = new TransactionService(transactionRepository);

    // Provide services to the Vue app
    app.provide(accountServiceKey, accountService);
    app.provide(transactionServiceKey, transactionService);
  }
};
