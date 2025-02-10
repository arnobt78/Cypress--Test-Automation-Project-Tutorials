/// <reference types="Cypress" />

describe('My Second Test Suite', function() 
{

it('My FirstTest case',function() {
    cy.log("hello")
    cy.sqlServer("select * from Person").then(function(result)
    {
        console.log(result[0][1])
    })
})

})
