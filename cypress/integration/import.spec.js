import search from "../POM/searchItem.spec"

describe("Search Item", () => {
	beforeEach( () => {
		cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
	})

	it('search field', () => {
		search.typeSearchButton("Carrot")
		search.clickAddToCart()
		search.clickCart()
		search.clickRemove()
		cy.contains('You cart is empty!').should('be.visible');
	})
})