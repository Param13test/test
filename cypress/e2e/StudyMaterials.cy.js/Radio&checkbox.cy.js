
describe("Checking UI elements", () => {
   it("Checking Radio buttons", () => {

      cy.visit("https://katalon-demo-cura.herokuapp.com/")

      cy.get("#btn-make-appointment").click()

      cy.get("#txt-username").type('John Doe')
      cy.get("#txt-password").type('ThisIsNotAPassword')
      cy.get("#btn-login").click()

      cy.get("#btn-make-appointment").click()


      //visibily of radio button
      cy.get("#radio_program_medicaid").should('be.visible')
      cy.get("#radio_program_none").should('be.visible')
      cy.get("#radio_program_medicare").should('be.visible')

      // Selecting radio button
      //cy.get("#radio_program_medicaid").click()   //select radio button
      cy.get("#radio_program_medicaid").check().should('be.checked')  //select radio button and verify it's checked or not


      cy.get("#radio_program_none").click()  //select radio button
      cy.get("input#radio_program_none").should('have.attr', 'value', 'None')  //verify the radio button is selected

      cy.get("#radio_program_medicare").click()  //select radio button
      cy.get("input#radio_program_medicare").should('have.attr', 'value', 'Medicare') 

      // Checking checkbox 

      //visibily of Checkbox option
      cy.get("#chk_hospotal_readmission").should('be.visible')

      // Selecting checkbox option
      cy.get("#chk_hospotal_readmission").check().should('be.checked')

      // Unchecked the option and verify it's unchecked or not 
      cy.get("#chk_hospotal_readmission").uncheck().should('be.not.checked')

      cy.select("#combo_facility").click()
      cy.get("option[value='Hongkong CURA Healthcare Center']").click()



   })




})