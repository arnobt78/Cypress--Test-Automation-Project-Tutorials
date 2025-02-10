/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
 
import 'cypress-iframe'
 
describe('Iframe Test',()=>{
 
    it('Test 6th',()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('li.dropdown').eq(1).invoke('show')
        cy.iframe().contains('Part time jobs').click({force: true})
        cy.wait(2000)
        cy.iframe().find('select[name="select-jpb-type"]').select('Freelancing') 
    })
})
