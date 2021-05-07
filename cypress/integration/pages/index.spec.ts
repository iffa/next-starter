describe('/', () => {
  it('successfully loads', () => {
    cy.visit('/');
  });

  it('successfully loads alternative locale', () => {
    cy.visit('/fi');
  });

  it('has correct text for default locale', () => {
    cy.visit('/');

    cy.get('h1').contains('Hello world.');
  });

  it('has correct text for alternative locale', () => {
    cy.visit('/fi');

    cy.get('h1').contains('Hei maailma.');
  });

  it('clicking language selector navigates to alternative locale', () => {
    cy.visit('/');

    cy.get('[data-cy=fi]').click();

    cy.url().should('include', '/fi');
  });
});
