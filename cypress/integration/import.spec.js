import search from "../POM/searchItem.spec"

describe("Search Item", () => {
	beforeEach( () => {
		cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
	})

	it('search field', () => {
		search.typeSearchButton("Carrot")
		search.clickAddToCart()
		search.clickCart()
		search.clickProceedToCheckout()
		search.clickPlaceOrder()
		search.selectCountry('Armenia')
		search.clickAgree()
		search.clickProceed()
	})
})