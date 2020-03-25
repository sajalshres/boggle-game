import { wait } from '@testing-library/react';

context('Boggle route', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should route to game', () => {
    cy.get('.nav')
      .get('.boggle-page')
      .click({ force: true });
    wait(500);

    cy.get('.container')
      .children()
      .should('have.class', 'game')
      .should('have.class', 'total')
      .should('have.class', 'submit');
  });

  it('should route to rank', () => {
    cy.get('.nav')
      .get('.rank-page')
      .click({ force: true });

    wait(500);

    cy.get('.rank')
      .get('.title')
      .contains('Rank Page');
  });

  it('should route to home', () => {
    cy.get('.nav')
      .get('.home-page')
      .click({ force: true });
    wait(500);

    cy.get('.home')
      .children()
      .get('.title')
      .contains('Welcome');
  });
});
