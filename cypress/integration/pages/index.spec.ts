describe('/', () => {
  it('successfully loads', () => {
    cy.visit('/');
  });

  it('successfully loads alternative locale', () => {
    cy.visit('/fi');
  });

  it('has correct text for default locale', () => {
    cy.visit('/');

    cy.get('h2').contains('Hello 🦄.');
  });

  it('has correct text for alternative locale', () => {
    cy.visit('/fi');

    cy.get('h2').contains('Hei 🦄.');
  });

  it('clicking language selector navigates to alternative locale', () => {
    cy.visit('/');

    cy.get('a').click();

    cy.url().should('include', '/fi');
  });
});
