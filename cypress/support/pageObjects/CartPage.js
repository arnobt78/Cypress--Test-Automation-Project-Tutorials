import ConfirmationPage from '../../support/pageObjects/ConfirmationPage'
class CartPage {
    checkoutItems(){
        cy.contains('button', 'Checkout').click()
        return new ConfirmationPage()

    }
    sumOfProducts()
    {
        let sum = 0

        return cy.get('tr td:nth-child(4) strong')
            .each($e1 => {
                //₹. 65000
                const amount = Number($e1.text().split(" ")[1].trim())
                sum = sum + amount //65000 + 1000000
            }).then(() => {
                return sum
            })
    }

}
export default CartPage;