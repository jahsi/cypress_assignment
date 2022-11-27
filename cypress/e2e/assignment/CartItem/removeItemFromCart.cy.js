const { login } = require("../../../PageObjects/LoginPage");
const loginPage = require("../../../PageObjects/LoginPage");
const MainPage = require("../../../PageObjects/MainPage");
const CartPage = require("../../../PageObjects/CartPage");
// cypress\PageObjects\LoginPage.js
describe("Adding items to cart", () => {
  beforeEach(() => {
    loginPage.login();
  });

  afterEach(() => {
    console.log("Log me out");
    cy.clearCookies();
  });
  it("Login in and add items to the cart then remove items from main page", () => {
    loginPage.addallitemsToCart();
    loginPage.removeAllItems();

    cy.get(".btn_inventory")
      // .should("have.length", 6)
      .each(($el, index, $list) => {
        cy.get($el).contains("Add");
      });

    // cy.get(".btn_inventory").its("length").should("eq", 6);
  });
  it("should remove items from the checkout screen", () => {
    loginPage.addallitemsToCart();
    MainPage.gotToShoppingCart();
    CartPage.shoppingCartButton.contains("6");
    CartPage.removeAllItems();
    CartPage.shoppingCartButton.contains("1");
  });
});
