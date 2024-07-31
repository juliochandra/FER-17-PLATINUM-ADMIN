/* eslint-disable no-undef */
describe("Add New Car Page", () => {
  beforeEach(() => {
    cy.login("admin@bcr.io", "123456");
    cy.visit("https://admin.fer17.fun/cars/add");
  });

  it("should load the page and display form elements", () => {
    cy.url().should("include", "/cars/add");
    cy.get("h3").should("contain", "Add New Car");
    cy.get("input#name").should("exist");
    cy.get("input#price").should("exist");
    cy.get("select#category").should("exist");
    cy.get("input#image").should("exist");
    cy.get("button.btn-primary").should("exist");
    cy.get("button.btn-outline-primary").should("exist");
  });

  it("should navigate to the previous page on Cancel button click", () => {
    cy.get("button.btn-outline-primary").first().click();

    cy.url().should("include", "https://admin.fer17.fun/cars");
  });
});
