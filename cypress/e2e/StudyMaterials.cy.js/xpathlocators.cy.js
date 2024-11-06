describe('xpathlocators', ()=>{

    it('find no of products', () =>{

        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get(".blockbestsellers[data-toggle='tab']").click()

        
        cy.xpath("//ul[@id='blockbestsellers']/li").should('have.length',6)
       


    })



}





)