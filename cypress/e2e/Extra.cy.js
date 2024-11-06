describe('My First Test', () => {
    it('verify title- positive test', () => {
      cy.visit("https://www.google.com/")
      cy.title().should('eq','Google')
    })
  
    
   // it('verify title- negative test', () => {
    //    cy.visit("https://www.google.com/")
     //   cy.title().should('eq','google')
      
    //})
    it ('verify the serach option', () => {
        cy.visit("https://www.google.com/")
        cy.get('#APjFqb').type('testing data')


    })
  
  
  })