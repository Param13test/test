describe('Login in to the Application', () => {

    beforeEach(() => {                                                // Reusing Code in Multiple it Blocks
        cy.visit("https://customerautomation.ility.space/auth")
        cy.title().should('eq', 'Login')
        cy.get('input#username').type('automationtestingumb@gmail.com')
        cy.get('#password').type('Test123!')
        cy.get('.submit-button-new').click()
        //cy.wait(10000)    //Static wait 
        cy.get('.greet-user-text > app-label-field > .dark-font-color > .display-inline').contains('Automation')

    })

    it('verify user is able to add property', () => {

        cy.xpath("(//i[@class='fal fa-bars'])[1]").click()
        cy.get("a[href='/portfolio']").click()
        // cy.url("https://customerautomation.ility.space/portfolio")
        cy.url().should('eq', 'https://customerautomation.ility.space/portfolio')
        cy.get("button[type='button']").click()
        cy.get('#name').type("testing data 1")                 //Property Name
        cy.get('#address').type('test data for address')       //Street Address

        cy.get('#city').type('test data for City')             //City
        cy.get('#state').type('test data- State')              //State / Province / Region
        cy.get('#country').type('IND')                         //Country
        cy.get('#zip').type('140603')                          //Zip Code
        cy.get('#email').type('test@gmail.com')                //Support Email



        cy.get('#mat-select-value-5 > .mat-select-placeholder').click()                      //Asset Type
        cy.get('#retail > .mat-option-text > .data-option > .upper-data-option').click()     //Asset Type






        cy.get('#area').type('13')                 //Total square metres
        cy.get('#latitude').type('12345')          // Latitude
        cy.get('#longitude').type('54321')         //Longitude


        // cy.get('.mat-select-arrow-wrapper.ng-tns-c128-29').click()    //Time Zone

        // cy.xpath("(//div[@class='upper-data-option'])[4]").click()    //Time Zone


        // Time Zone 
        cy.get('.mat-select-placeholder').click()
        cy.get('#mat-input-7').type('Africa/Bissau').type('{enter}')
        cy.get("mat-option[id='Africa/Bissau']").click()
       



        cy.get('#externalId').type('External ID -test 1')    //External ID 1 
        cy.get('#externalCode').type('External ID -test 2')   //External ID 2
        cy.get('#externalMRI').type('External ID -test 3')   //External ID 3

        cy.get("#propertyDescription").type('Property description for testing purpose')  // property description
        cy.get("#brokerSiteURL").type('www.google.com') // Broker Site URL

        //Visibility of radio button
        cy.get("#mat-radio-2").should('be.visible')
        cy.get("#mat-radio-3").should('be.visible')

        //Selecting radio button
        cy.get("#mat-radio-2").click()  //yes radio button
        cy.get("input#mat-radio-2-input").should('have.attr', 'value', 'yes')
        cy.get("#mat-radio-3").click()  //No radio button


        cy.get("#floorName").type('3rd floor')    // floor name
        cy.xpath("(//button[@type='button'])[1]").click()  //Add button


        // Floor Name delete pending 

        cy.get("#owner").type('Owner param')   //ownership 
        cy.get("#fund").type('Fund param')  //Fund Manager
        cy.get("#assetManager").type('assetManager param1')  //Investment Manager
        cy.get("#propertyManager").type('property Manager param')  //propertyManager
        cy.get("#largestTenant").type('Tenant param')  //largest Tenant

        // Last Valuation Date pending 

        cy.get("#grossAssetValue").type('13.13')  //Gross Asset Value
        cy.get("#capRate").type('13')  //Cap rate
        cy.get("#discountRate").type('14')  // Discount Rate
        cy.get("#nla").type('1313')  // NLA
        cy.get("#ga").type('Tenant param1213')  // GLA
        cy.get("#annualizedNetRentalIncome").type('1300')  //Annualized Net Rental Income
        cy.get("#marketRentPerSqm").type('130')  //Market Rent
        cy.get("#wale").type('111')  //WALE
        cy.get("#warr").type('12')  //WARR
        cy.get("#marketGrowth").type('13')  //Market Growth
        cy.get("#incentive").type('30')  //Gross Incentives 
        cy.get("#purchasePrice").type('131313')  //Purchas Price

        //Acquired Date selection pending 
        //cy.xpath("//div[normalize-space()='1']").click()  //Acquired Date

        cy.get("#noi").type('1313.13')  //Net Operating Income
        cy.get("#leasingSpread").type('13')  //Leasing Spread (net)




















    })


})
