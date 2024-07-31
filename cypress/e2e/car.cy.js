/* eslint-disable no-undef */
describe("Car Listing Page", () => {
  beforeEach(() => {
    cy.login("admin@bcr.io", "123456");
    cy.visit("https://admin.fer17.fun/cars");
  });

  it("should load the page and display car cards", () => {
    cy.url().should("include", "/cars");
    cy.get(".card").should("have.length.greaterThan", 0);
  });

  it("should display car details correctly", () => {
    cy.get(".card")
      .first()
      .within(() => {
        cy.get(".card-title").should("exist");
        cy.get(".card-text").should("exist");
      });
  });

  it("should navigate to car edit page on edit button click", () => {
    cy.get(".btn-success").first().click();
    cy.url().should("include", "/cars/edit");
  });

  it("should navigate to add new car page on add button click", () => {
    cy.get("a.btn-primary").click();
    cy.url().should("include", "/cars/add");
  });
});
