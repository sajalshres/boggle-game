import { text } from '@fortawesome/fontawesome-svg-core';

context('Boggle Page', () => {
  before(() => {
    cy.visit('/game');
  });

  it('should render', () => {
    cy.get('.container')
      .children()
      .should('have.length', 4);

    cy.get('.container')
      .children()
      .should('have.class', 'game')
      .should('have.class', 'total')
      .should('have.class', 'submit');

    cy.get('.game')
      .children()
      .should('have.class', 'board')
      .should('have.class', 'score');

    cy.get('.total')
      .children()
      .should('have.class', 'start-btn');

    cy.get('.submit')
      .children()
      .should('have.class', 'submit-input')
      .should('have.class', 'submit-button');
  });

  it('should have a boggle board', () => {
    cy.get('.board')
      .children()
      .should('have.length', 16);
  });

  it('should have a score board', () => {
    cy.get('.score')
      .children()
      .should('have.class', 'table');

    cy.get('.score-word').contains('Word');
    cy.get('.score-total').contains('Score');
  });
});

context('Game', () => {
  beforeEach(() => {
    cy.visit('/game');
  });

  it('should be started', () => {
    cy.get('.start-btn').click();
    cy.wait(500);
    cy.get('.total')
      .children()
      .should('have.class', 'total-timer')
      .should('have.class', 'total-score');

    cy.get('.letter')
      .first()
      .click();
  });
});
