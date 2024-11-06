describe('CSS Locators', () => {
  it('css locatorss', () => {


    cy.visit("http://www.automationpractice.pl/index.php")

    cy.get("#search_query_top").type("T-shirt")     //id    tag is optional

    //cy.get("input#search_query_top").type("T-shirt")     //id   with tag 
    // cy.get(".search_query").type("T-shirt")         // class locator

    // cy.get("[name='search_query']").type("T-shirt")    // Attribute locator

    // cy.get(".search_query[name='search_query']").type("T-shirt")    // Class Attribute locator


    cy.get("[name='submit_search']").click()

    cy.get(".lighter").contains('T-shirt')   //assertion






  })

})