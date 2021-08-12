describe('App', function() {
    it('front page can be opened', function() {
      cy.visit('http://localhost:3000')
      cy.contains('Vaccine orders and vaccinations')
      cy.contains('Select end date to filter data')
      cy.contains('Total amount of orders (bottles) arrived by selected date')
      cy.contains('Total amount of vaccine doses arrived by selected date (one bottle has many doses)')
      cy.contains('Total amount of vaccinations injected by selected date')
    })
  })