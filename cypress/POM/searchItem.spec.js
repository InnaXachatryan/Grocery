class search {

	elements = {
		SearchButton: () => cy.get('[placeholder="Search for Vegetables and Fruits"]'),
		AddToCart: () => cy.get('.product-action [type="button"]'),
		Cart: () => cy.get('.cart-icon [alt="Cart"]'),
		Remove: () => cy.get('.cart-preview.active .cart-items .cart-item .product-remove')
	}

	typeSearchButton(item){
		this.elements.SearchButton().type(item)
	}

	clickAddToCart(){
		this.elements.AddToCart().click()
	}

	clickCart(){
		this.elements.Cart().click()
	}

	clickProceedToCheckout(){
		this.elements.ProceedToCheckout().click()
	}

	clickRemove(){
		this.elements.Remove().click()
	}
} 

module.exports = new search()