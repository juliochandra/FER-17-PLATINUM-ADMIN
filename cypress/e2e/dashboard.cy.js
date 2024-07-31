/* eslint-disable no-undef */
describe("Dashboard Page", () => {
  beforeEach(() => {
    cy.login("admin@bcr.io", "123456");
    cy.visit("https://admin.fer17.fun/dashboard");
  });

  it("should display the sidebar with the correct items", () => {
    cy.get("#sidebar").should("exist").and("be.visible");

    cy.get("#sidebar a[href='/dashboard']").should("exist");
    cy.get("#sidebar a[href='/cars']").should("exist");

    cy.get("#sidebarToggle").should("exist").and("be.visible");

    cy.get("#sidebarToggle .bottom-shadow").should("exist");

    cy.get("#sidebarToggle .text-uppercase").should(
      "contain.text",
      "dashboard"
    );
    cy.get("#sidebarToggle .col").last().should("contain.text", "dashboard");

    cy.get("#navigationContent").should("exist").and("be.visible");

    cy.get("#content .row .col").should("exist").and("be.visible");
  });
});
