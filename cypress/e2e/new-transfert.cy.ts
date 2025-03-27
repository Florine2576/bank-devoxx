import { dataSelector } from '../dataselector'

describe('Transactions', () => {
  beforeEach(() => {
    cy.intercept('/api/accounts', { fixture: 'accounts.json' }).as('account')

    cy.intercept('/api/accounts/transactions', { fixture: 'transactions.json' }).as('transactions')
  })

  it('should create new transfert', () => {
    const newTransaction = {
      label: "Virement à Florine",
      amount: 150,
      type: "Virement"
    }
    cy.intercept('POST', '/api/accounts/transactions', (req) => {
      expect(JSON.stringify(req.body)).to.be.equal(JSON.stringify(newTransaction))
    })

    cy.visit('/new-transfert')

    cy.get(dataSelector("label")).type(newTransaction.label);
    cy.get(dataSelector("amount")).type(newTransaction.amount.toFixed(0));
    cy.get(dataSelector("save")).click();

    cy.url().should('eq', Cypress.config().baseUrl + '/');
  })
})
