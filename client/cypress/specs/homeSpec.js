context('Home Page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should have logo', () => {
    cy.get('.logo').contains('Boggle');
  });

  it('should have navigation', () => {
    cy.get('.nav')
      .children()
      .should('have.length', 3);
  });

  it('should have root element', () => {
    cy.get('#root');
  });

  it('should render welcome title', () => {
    cy.get('.home')
      .children()
      .get('.title')
      .contains('Welcome');
  });

  it('should render welcome Rules', () => {
    cy.get('.home')
      .children()
      .get('.title')
      .contains('Rules');
  });

  it('shoudl render footer', () => {
    cy.get('Footer').contains('sajalshres');
  });
});
