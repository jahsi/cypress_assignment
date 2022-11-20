class CartPage {
  get shoppingCartButton() {
    return cy.get(".shopping_cart_link");
  }
  clickRemoveAllItems() {
    let count = 5;
    let items_left = 1;
    for (let i = count; i >= items_left; i--) {
      console.log("I am I" + i);
      cy.get(".cart_button").eq(i).click();
    }
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
module.exports = new CartPage();
