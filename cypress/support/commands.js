// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//

Cypress.Commands.add('submitFormDetails',()=>
    {
            cy.get("#country").type("India")
            cy.get(".suggestions ul li a").click()
            cy.get(".btn-success").click()
    })

Cypress.Commands.add("LoginAPI",()=> {

    cy.request("POST","https://rahulshettyacademy.com/api/ecom/auth/login",
    {"userEmail":"anshika@gmail.com","userPassword":"Iamking@000"}).
    then(function(response)
    {
        expect(response.status).to.eq(200)
       Cypress.env('token',response.body.token);
    })
})



