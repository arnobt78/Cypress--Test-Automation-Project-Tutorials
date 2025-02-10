import ProductPage from '../../support/pageObjects/ProductPage'

class HomePage
{

goTo(url)
{
    cy.visit(url)
}
login(username,password)
{
    cy.get("#username").type(username)
    cy.get("#password").type(password)
    cy.contains("Sign In").click()
    return new ProductPage()
    


}


}
export default HomePage;