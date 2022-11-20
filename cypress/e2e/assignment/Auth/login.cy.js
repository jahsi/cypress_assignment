const { login } = require("../../../../cypress/PageObjects/LoginPage");
const loginPage = require("../../../../cypress/PageObjects/LoginPage");
// cypress\PageObjects\LoginPage.js
describe("Adding items to cart", () => {
  beforeEach(() => {
    loginPage.login();
    // cy.get('[data-test="username"]').type("standard_user");
    // cy.get('[data-test="password"]').type("secret_sauce");
    // // cy.get("input").eq(0).type("standard_user");
    // // cy.get("input").eq(1).type("secret_sauce");
    // cy.get('[data-test="login-button"]').click();
  });

  afterEach(() => {
    console.log("Log me out");
  });
  it("Login in and add all items to the cart", () => {
    loginPage.addallitemsToCart();

    cy.get(".btn_inventory")
      // .should("have.length", 6)
      .each(($el, index, $list) => {
        cy.get($el).contains("Remove");
      });

    // cy.get(".btn_inventory").its("length").should("eq", 6);
  });
});
