

describe('Assertions Demo', () => {

    it('Implicit assertions', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        /*Should - Implicit assertions
       cy.url().should('include','orangehrmlive.com')
       cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       cy.url().should('contain','orangehrm')n*/

        // we can use only one time cy.url as well  
        /*cy.url().should('include','orangehrmlive.com')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','orangehrm') */

        // Using And - Implicit assertions
        cy.url().should('include', 'orangehrmlive.com')
            .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .and('contain', 'orangehrm')
            .and('not.contain', 'orangehrm132')   // negative assertions 


        //verify the Title of the page 
        cy.title().should('include', 'Orange')
            .and('eq', 'OrangeHRM')
            .and('contain', 'HRM')

        // Check the element/logo is visible or not   // both points are valid
        cy.get('.orangehrm-login-branding > img').should('be.visible')
        cy.get('.orangehrm-login-branding > img').should('exist')   //logo exist

        // Number of links present in the screen 
        //cy.xpath("//a").should('have.lenght','5')

        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Username']").should('have.value', 'Admin')    //value check

    })

    it('Explicit assertions', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()


        // after login check the user name is correct or not using explicit assertions

        let expName = "manda user";

        cy.get(".oxd-userdropdown-tab").then((x) => {

            let actName = x.text()

            // BDD style - behavior data development
            expect(actName).to.equal(expName)
            //expect(actName).to.not.equal(expName)


            //TDD Style -test data driven
            assert.equal(actName, expName)
            //assert.not.equal(actName,expName)




        })







    })




})