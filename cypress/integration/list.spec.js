describe("List Test", () => {
  it("should go to the list page and add a value", () => {
    cy.visit("/home-page");
    cy.get("#startButton").click();
    cy.get("h1").should("contain", "Learn Cypress");
    cy.get("#listsButton").click();
    cy.get("#createInput").type("use the force Luke!");
    cy.get("#createButton").click();
    cy.get("li").eq(4).should("contain", "use the force Luke!");
  });

  it("should go to the list page and delete a value", () => {
    cy.visit("/home-page");
    cy.get("#startButton").click();
    cy.get("h1").should("contain", "Learn Cypress");
    cy.get("#listsButton").click();
    cy.get("#createInput").type("use the force Luke!");
    cy.get("#createButton").click();
    cy.get("li").eq(4).should("contain", "use the force Luke!");
    cy.get(":nth-child(5) > .btn").click();
    cy.get("[data-cy=listValues]").children().should("have.length", 4);
  });
});
