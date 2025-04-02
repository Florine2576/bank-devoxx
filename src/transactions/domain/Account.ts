export enum AccountType {
  CHECKING = 'CHECKING',
  SAVING = 'SAVING'
}

export interface Account {
  type: AccountType;
  amount: number;
}
