describe('Transactions', () => {

  describe('Account', () => {
    it('should display accounts', () => {
      cy.visit('/');

      cy.get('[data-selector="checking-account-title"]', { timeout: 10000 }).should('be.visible');

      cy.get('[data-selector="checking-account-title"]').should('contain.text', 'Compte courant');
      cy.get('[data-selector="checking-account-amount"]').should('contain.text', '6 544€');
      cy.get('[data-selector="saving-account-title"]').should('contain.text', 'Compte épargne');
      cy.get('[data-selector="saving-account-amount"]').should('contain.text', '9 644€');
    });
  });
});
