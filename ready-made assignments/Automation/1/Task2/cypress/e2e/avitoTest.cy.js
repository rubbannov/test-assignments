const { user } = require("../fixtures/user.js");
const { items } = require("../fixtures/items.js");
const { selectors } = require("../fixtures/selectors.js");

describe("Проверка отсутствия номера телефона при заказе товара с доставкой", () => {
  it("Проверка пустого поля номера телефона", () => {
    cy.visit("https://www.avito.ru/");
    cy.contains(selectors.logIn).should("be.visible");
    cy.login(user.login, user.password);

    cy.visit("https://www.avito.ru/sochi/lichnye_veschi?cd=1&d=1");
    cy.contains(user.userName).should("be.visible");

    cy.contains(items.item).click();

    cy.contains(selectors.buyWithDelivery).click();

    cy.get(selectors.phoneNumberField).should("have.value", "");
  });
});
