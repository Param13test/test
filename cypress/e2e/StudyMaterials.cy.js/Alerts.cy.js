

describe('Alerts', () => {

    //1 Javascript Alert: It will have some text and an OK button 

    it('Java alert', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()
        cy.on('window:alert', (a) => {
            expect(a).to.contains('I am a JS Alert');
        })

        // Alert window automatically closed by Cypress
        cy.get("#result").should('have.text', 'You successfully clicked an alert')
    })

    //2 Javascript Confirm Alert: It will have some tect with OK and Cancel buttons

    it('Java Confirm-OK', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm', (b) => {
            expect(b).to.contains('I am a JS Confirm');
        })

        // Cypress automatically closed alert window by using OK button-default
        cy.get("#result").should('have.text', 'You clicked: Ok')

    })
    it('Java Confirm- Cancel', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm', (b) => {
            expect(b).to.contains('I am a JS Confirm');
        })
        cy.on('window:confirm', () => false); //cypress close alert window using cancel button
        cy.get("#result").should('have.text', 'You clicked: Cancel')

    })


    //3 Javascript Propt Alert: It will have some text with a text box for user input along with OK
    it.only('Java Prompt alert', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then((win) => {
            cy.stub(win,'prompt').returns('welcome');

        })
        cy.get("button[onclick='jsPrompt()']").click();

        cy.get("#result").should('have.text', 'You entered: welcome');
    })





    //4 Authenticated Alert 


})