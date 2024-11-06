describe('Login in to the Application', () => {
    it('verify user is able to Login with valid credentials and verify the title of the page', () => {

        cy.visit("https://customerautomation.ility.space/auth")
        cy.title().should('eq', 'Login')
        cy.get('input#username').type('automationtestingumb@gmail.com')
        cy.get('#password').type('Test123!')
        cy.get('.submit-button-new').click()
        //cy.wait(10000)    //Static wait 

        cy.get('.greet-user-text > app-label-field > .dark-font-color > .display-inline').contains('Automation')
        // cy.get('.greet-user-text > app-label-field > .dark-font-color > .display-inline').should('include','Automation')


       
    })
})