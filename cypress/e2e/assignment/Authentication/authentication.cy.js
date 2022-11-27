const { login } = require("../../../PageObjects/LoginPage");
const loginPage = require("../../../PageObjects/LoginPage");
const MainPage = require("../../../PageObjects/MainPage");
const CartPage = require("../../../PageObjects/CartPage");
const User = require("../../data/users.data");
// cypress\PageObjects\LoginPage.js
describe("Authentication Test", () => {
  beforeEach(() => {
    cy.visit("https://saucedemo.com");
  });

  afterEach(() => {
    console.log("Log me out");
    cy.clearCookies();
  });
  it.skip("Login With Valid User ", () => {
    loginPage.username.type(User.valid.username);
    loginPage.password.type(User.valid.password);
    loginPage.submitButton.click();
    cy.url().should("include", "inventory");
    // loginPage.removeAllItems();

    // cy.get(".btn_inventory").its("length").should("eq", 6);
  });

  it("should login in with a locked out user", () => {
    loginPage.username.type(User.lockedOutUser.username);
    loginPage.password.type(User.lockedOutUser.password);
    loginPage.submitButton.click();
    cy.get(".error-button").should("be.visible");
    cy.get(`h3[data-test="error"]`).contains(User.lockedOutUser.errorMsg);
  });
});
