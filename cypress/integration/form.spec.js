describe("Form Test", () => {
  before(() => {
    cy.start();
  });

  it("should go to the forms page and enter login information", () => {
    cy.get("#formsButton").click();
    cy.get("#email").type("HanSolo@gmail.com");
    cy.get("#password").type("password");
    cy.get("#submitButton").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "successfully entered input with email HanSolo@gmail.com and password password"
      );
    });
  });
});
