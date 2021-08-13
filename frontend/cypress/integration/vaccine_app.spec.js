describe('App', function() {
    it('front page can be opened', function() {
      cy.visit('http://localhost:3000')
      cy.contains('Vaccine orders and vaccinations')
      cy.contains('Select end date to filter data')
      cy.contains('Select producer to filter data')
      cy.contains('Total amount of orders (bottles) arrived by selected date and producer')
      cy.contains('Total amount of vaccine doses (one bottle has many doses) arrived by selected date and producer')
      cy.contains('Total amount of vaccinations injected by selected date and producer')
    })
  })