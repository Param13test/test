describe("Handlle Dropdowns", () => {

    it.skip("Dropdown with Select", () => {  // if we enter the skip then 'it' section is skipped

        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get("#zcf_address_country").select('Haiti')  //select the option from dropdown
            .should('have.value', 'Haiti')   //verify the selected value is correct or not ?


    })

    it.skip("Dropdown without Select", () => {

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get('#select2-billing_country-container').click()
        cy.get("input[role='combobox']").type('Togo').type('{enter}')    // after search we click enter button
        cy.get('#select2-billing_country-container').should('have.text', 'Togo') // verify the entered value is correct or not ?


    })

    it.skip("Auto suggest Dropdown ", () => {

        cy.visit("https://www.wikipedia.org/")
        cy.get('#searchInput').type('Delhi')
        cy.get('.suggestions-dropdown').contains('Delhi University').click()


    })

    it("Dynamic Dropdown ", () => {

        cy.visit("https://www.google.com/")
        cy.get('#APjFqb').type('Cypress')
        cy.wait(3000)                            // Wait apply because auto suggestion takes some time

        cy.get('div.wM6W7d>span').each(($el, index, $list) => {
            if ($el.text() == 'Cypress vine') {
                cy.wrap($el).click()
            }

        })

        cy.get('#APjFqb').should('have.value', "Cypress vine")  // verify the expected page open or not

    })


})