describe('App', function() {
    it('front page can be opened', function() {
      cy.visit('http://localhost:3000')
      cy.contains('Vaccine orders and vaccinations')
      cy.contains('Total amount of orders (bottles)')
      cy.contains('Total amount of vaccinations')
    })
  })