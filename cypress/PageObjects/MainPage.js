class MainPage {
  get shoppingCartButton() {
    return cy.get(".shopping_cart_link");
  }
  clickRemoveAllItems() {
    let count = 6;
    for (let i = 0; i < count; i++) {
      cy.get(".btn_inventory").eq(i).click();
    }
    // return
  }

  get dropDownMenu() {
    return cy.get('[data-test="product_sort_container"]');
  }

  gotToShoppingCart() {
    this.shoppingCartButton.click();
  }
  //// :nth-child(5)>.inventory_item_description>.pricebar>.btn
  getAllitems() {
    let count = 6;
    for (let i = 0; i < count; i++) {
      cy.get(".btn_inventory").eq(i).click();
    }
    // return cy.get(".btn_inventory");
  }
  removeAllItems() {
    this.clickRemoveAllItems();
  }

  addallitemsToCart() {
    this.getAllitems();
    // console.log(this.getAllitems().length);
  }

  filterObjedcts(filter_value) {
    this.dropDownMenu.select(filter_value);
    // this.dropDownMenu.select(1);
  }

  get itemsName() {
    return ".inventory_item_name";
  }
  get itemsPrice() {
    return ".inventory_item_price";
  }
}
module.exports = new MainPage();
