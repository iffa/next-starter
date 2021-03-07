describe('/api/hello', () => {
  it('returns correct data', () => {
    cy.request('/api/hello').then((response) => {
      expect(response.body).to.have.property('name', 'John Doe');
    });
  });
});
