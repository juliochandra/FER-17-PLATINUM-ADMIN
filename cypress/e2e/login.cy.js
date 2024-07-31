/* eslint-disable no-undef */

describe("Login Page", () => {
  before(() => {
    // Visit the login page before running the tests
    cy.visit("https://admin.fer17.fun");
  });

  it("should display the login form, input fields and sign in button", () => {
    cy.get("form").should("exist").and("be.visible");
    cy.get("#formBasicEmail").should("exist").and("be.visible");
    cy.get("#formBasicPassword").should("exist").and("be.visible");
    cy.get("button[type='submit']").should("exist").and("be.visible");
    cy.get("#formBasicEmail").should("exist").type("admin@bcr.io");
    cy.get("#formBasicPassword").should("exist").type("123456");
    cy.get("button[type='submit']").should("exist").click();
  });
});
