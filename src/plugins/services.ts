import type { App } from 'vue';
import { AccountService, accountServiceKey } from '../transactions/application/AccountService';
import { TransactionService, transactionServiceKey } from '../transactions/application/TransactionService';
import { TransfertService, transfertServiceKey } from '../transfert/application/TransfertService';
import { AccountApiRepository } from '../transactions/infrastructure/secondary/AccountApiRepository';
import { TransactionApiRepository } from '../transactions/infrastructure/secondary/TransactionApiRepository';
import { TransfertApiRepository } from '../transfert/infrastructure/secondary/TransfertApiRepository';

export default {
  install: (app: App) => {
    // Create repositories
    const accountRepository = new AccountApiRepository();
    const transactionRepository = new TransactionApiRepository();
    const transfertRepository = new TransfertApiRepository();

    // Create services with repository dependencies
    const accountService = new AccountService(accountRepository);
    const transactionService = new TransactionService(transactionRepository);
    const transfertService = new TransfertService(transfertRepository);

    // Provide services to the Vue app
    app.provide(accountServiceKey, accountService);
    app.provide(transactionServiceKey, transactionService);
    app.provide(transfertServiceKey, transfertService);
  }
};
