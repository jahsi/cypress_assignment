class LoginPage {
  get username() {
    return cy.get('[data-test="username"]');
  }
  get sideBarButton() {
    return cy.get("#react-burger-menu-btn");
  }

  get password() {
    return cy.get('[data-test="password"]');
  }

  get submitButton() {
    return cy.get('[data-test="login-button"]');
  }
  login() {
    cy.visit("https://saucedemo.com");
    this.username.type("standard_user");
    this.password.type("secret_sauce");
    this.submitButton.click();
  }

  logout() {
    this.sideBarButton.click();
  }
  clickRemoveAllItems() {
    let count = 6;
    for (let i = 0; i < count; i++) {
      cy.get(".btn_inventory").eq(i).click();
    }
    // return
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
}
module.exports = new LoginPage();
