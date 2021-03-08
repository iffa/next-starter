describe('/api/hello', () => {
  it('returns correct data', () => {
    cy.request('/api/hello?name=John Doe').then((response) => {
      expect(response.body).to.have.property('name', 'John Doe');
    });
  });

  it('returns validation error for missing data', () => {
    cy.request({
      method: 'GET',
      url: '/api/hello',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.body).to.contain('name is a required field');
    });
  });
});
