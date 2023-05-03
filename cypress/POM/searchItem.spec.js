class search {

	elements = {
		SearchButton: () => cy.get('[placeholder="Search for Vegetables and Fruits"]'),
		AddToCart: () => cy.get('.product-action [type="button"]'),
		Cart: () => cy.get('.cart-icon [alt="Cart"]'),
		ProceedToCheckout: () => cy.get('.cart-preview.active .action-block [type="button"]'),
		PlaceOrder: () => cy.get('#root .container .products-wrapper .products > div > button'),
		Country: () => cy.get("#root .products-wrapper .products .wrapperTwo select"),
		Agree: () => cy.get(".chkAgree"),
		Proceed: () => cy.get('.wrapperTwo button')
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

	clickPlaceOrder(){
		this.elements.PlaceOrder().click()
	}

	selectCountry(country) {
    	this.elements.Country().select(country);
    }

    clickAgree(){
    	this.elements.Agree().click()
    }

    clickProceed(){
    	this.elements.Proceed().click()
    }

} 

module.exports = new search()