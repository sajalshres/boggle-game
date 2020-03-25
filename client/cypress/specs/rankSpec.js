context('Rank Page', () => {
  before(() => {
    cy.visit('/rank');
  });

  it('should render', () => {
    cy.get('.rank')
      .get('.title')
      .contains('Rank Page');
  });

  it('should have rank table', () => {
    cy.get('.table').should('have.length', 1);
    cy.get('.rank-name').contains('Name');
    cy.get('.rank-score').contains('Score');
    cy.get('.rank-words').contains('Words');
    cy.get('.rank-date').contains('Date');
  });
});
