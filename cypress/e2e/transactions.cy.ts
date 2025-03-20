import { dataSelector } from '../dataselector'

describe('Transactions', () => {
  beforeEach(() => {
    cy.intercept('/api/accounts', { fixture: 'accounts.json' }).as('account');

    cy.intercept('/api/accounts/transactions', { fixture: 'transactions.json' }).as('transactions');
  });

  describe('Account', () => {
    it('should display accounts', () => {
      cy.visit('/')

      cy.wait('@account')

      cy.get('[data-selector="checking-account-title"]').should('contain.text', 'Compte courant')
      cy.get('[data-selector="checking-account-amount"]').should('contain.text', '6 544€')
      cy.get('[data-selector="saving-account-title"]').should('contain.text', 'Compte épargne')
      cy.get('[data-selector="saving-account-amount"]').should('contain.text', '9 644€')
    })
  })

  describe('TransactionsTable', () => {
    it('should display transaction table', () => {
      cy.visit('/')

      cy.wait('@transactions')

      cy.get(dataSelector('transaction-rows')).should('have.length', 6);

      cy.get(dataSelector('transactions-header')).eq(0).contains('Description');
      cy.get(dataSelector('transactions-header')).eq(1).contains('Identifiant');
      cy.get(dataSelector('transactions-header')).eq(2).contains('Type');
      cy.get(dataSelector('transactions-header')).eq(3).contains('Compte');
      cy.get(dataSelector('transactions-header')).eq(4).contains('Date');
      cy.get(dataSelector('transactions-header')).eq(5).contains('Montant');


      cy.get(dataSelector('transactions-description')).eq(0).contains('Cloth&Co');
      cy.get(dataSelector('transactions-id')).eq(0).contains('12548796');
      cy.get(dataSelector('transactions-type')).eq(0).contains('Shopping');
      cy.get(dataSelector('transactions-account')).eq(0).contains('Checking account');
      cy.get(dataSelector('transactions-date')).eq(0).contains('28 Mars 2025');
      cy.get(dataSelector('transactions-amount')).eq(0).contains('-2 500€');
    });
  });
});
