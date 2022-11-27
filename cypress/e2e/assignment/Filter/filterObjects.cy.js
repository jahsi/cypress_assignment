const { login } = require("../../../PageObjects/LoginPage");
const loginPage = require("../../../PageObjects/LoginPage");
const MainPage = require("../../../PageObjects/MainPage");
const CartPage = require("../../../PageObjects/CartPage");
const productData = require("../../data/productList.js");
// cypress\e2e\assignment\Filter\filterObjects.cy.js
// cypress\e2e\data\productList.js
describe("Adding items to cart", () => {
  beforeEach(() => {
    loginPage.login();
  });

  afterEach(() => {
    console.log("Log me out Scotty");
    cy.clearCookies();
  });

  it("Login and  sort objects asc", () => {
    MainPage.filterObjedcts(productData.filter_objects["assending_order"]);
    let data = productData.original_list.sort();
    cy.log(data);
    cy.get(MainPage.itemsName).each(($elem, index) => {
      cy.log(JSON.stringify(data[1]));
      expect($elem.text()).equal(data[index].name);
    });
    // MainPage.filterObjedcts("lol");

    // cy.get(".btn_inventory").its("length").should("eq", 6);
  });

  it("Login and  sort objects desc", () => {
    MainPage.filterObjedcts(productData.filter_objects["descending_order"]);
    let data = productData.original_list.sort().reverse();
    cy.log(data);
    cy.get(MainPage.itemsName).each(($elem, index) => {
      cy.log(JSON.stringify(data[1]));
      expect($elem.text()).equal(data[index].name);
    });
    // MainPage.filterObjedcts("lol");

    // cy.get(".btn_inventory").its("length").should("eq", 6);
  });
});
