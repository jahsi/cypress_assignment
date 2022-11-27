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
    console.log("Log me out Scotty");
    cy.clearCookies();
  });

  it("Login in and add filter All Objects", () => {
    loginPage.addallitemsToCart();
    MainPage.filterObjedcts();

    // cy.get(".btn_inventory").its("length").should("eq", 6);
  });
});
