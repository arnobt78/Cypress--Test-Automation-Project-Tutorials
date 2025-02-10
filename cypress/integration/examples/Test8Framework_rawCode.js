describe('End to End ecommerce Test', function () {

    before(function(){
        //runs once before all tests in this block
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })

})


    it('Submit Order', function () {
       
        const productName = this.data.productName
        cy.visit("https://rahulshettyacademy.com/loginpagePractise/#")
        cy.get("#username").type(this.data.username)
        cy.get("#password").type(this.data.password)
        cy.contains("Sign In").click()
        cy.contains("Shop Name").should('be.visible')
        cy.get('app-card').should('have.length', 4)
        cy.get('app-card').filter(`:contains("${productName}")`)
            .then($element => {
                cy.wrap($element).should('have.length', 1)
                cy.wrap($element).contains('button', 'Add').click()

            }
            )
        cy.get('app-card').eq(0).contains('button', 'Add').click()
        cy.contains('a', 'Checkout').click()
        let sum = 0

        cy.get('tr td:nth-child(4) strong')
            .each($e1 => {
                //₹. 65000
                const amount = Number($e1.text().split(" ")[1].trim())
                sum = sum + amount //65000 + 1000000
            }).then(() => {
                expect(sum).to.be.lessThan(200000);
            })
            cy.contains('button', 'Checkout').click()
            Cypress.config('defaultCommandTimeout',10000)
            cy.get("#country").type("India")
            cy.get(".suggestions ul li a").click()
            cy.get(".btn-success").click()
            cy.get(".alert-success").should('contain','Success')




    });





});






















