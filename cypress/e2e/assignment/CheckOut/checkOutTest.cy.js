const { login } = require("../../../PageObjects/LoginPage");
const loginPage = require("../../../PageObjects/LoginPage");
const MainPage = require("../../../PageObjects/MainPage");
const CartPage = require("../../../PageObjects/CartPage");
const checkOutData = require("../../data/checkOutData");

const CheckOutPage = require("../../../PageObjects/CheckOutPage");
// cypress\PageObjects\LoginPage.js
describe("Check Out Flow", () => {
  beforeEach(() => {
    loginPage.login();
  });

  afterEach(() => {
    console.log("Log me out");
    cy.clearCookies();
  });

  it("should login and verify that six items were in cart and check out", () => {
    loginPage.addallitemsToCart();
    MainPage.gotToShoppingCart();
    CartPage.shoppingCartButton.contains("6");
    CartPage.checkOutButton.click();
    CheckOutPage.checkOutItems(
      checkOutData.user.first_name,
      checkOutData.user.last_name,
      checkOutData.user.last_name
    );
    CheckOutPage.thankyouMessge.contains("THANK YOU FOR YOUR ");
  });
});
