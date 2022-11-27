class CheckOutPage {
  get first_name() {
    return cy.get('[data-test="firstName"]');
  }
  get last_name() {
    return cy.get('[data-test="lastName"]');
  }

  get zip_code() {
    return cy.get('[data-test="postalCode"]');
  }
  get continue_button() {
    return cy.get('[data-test="continue"]');
  }

  get finish_button() {
    return cy.get('[data-test="finish"]');
  }

  get thankyouMessge() {
    return cy.get('h2[class="complete-header"]');
  }
  checkOutItems(first_name, last_name, zip_code) {
    this.first_name.type(first_name);
    this.last_name.type(last_name);
    this.zip_code.type(zip_code);
    this.continue_button.click();
    this.finish_button.click();

    // return
  }

  gotToShoppingCart() {
    this.shoppingCartButton.click();
  }
  //// :nth-child(5)>.inventory_item_description>.pricebar>.btn

  removeAllItems() {
    this.clickRemoveAllItems();
  }

  addallitemsToCart() {
    this.getAllitems();
    // console.log(this.getAllitems().length);
  }
}
module.exports = new CheckOutPage();
