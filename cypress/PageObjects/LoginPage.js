class LoginPage {
  get username() {
    return cy.get('[data-test="username"]');
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
  //// :nth-child(5)>.inventory_item_description>.pricebar>.btn
  getAllitems() {
    let count = 6;
    for (let i = 0; i < count; i++) {
      cy.get(".btn_inventory").eq(i).click();
    }
    // return cy.get(".btn_inventory");
  }

  addallitemsToCart() {
    console.log("lololol");
    this.getAllitems();
    console.log(this.count);
    // console.log(this.getAllitems().length);
  }
}
module.exports = new LoginPage();
