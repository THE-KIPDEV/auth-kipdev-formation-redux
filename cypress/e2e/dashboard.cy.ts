describe("Change firstname", () => {
  beforeEach(() => {
    cy.visit("/");

    cy.get("#email").type("yohann@kipdev.io");
    cy.get("#password").type("Hello123;");
    cy.get("#myForm").submit();
  });

  it("Successfull", () => {
    cy.get("#firstname").type("Jean");
    cy.get("#formEditFirstName").submit();

    cy.get(".Toastify__toast--success").should("exist");
  });

  it("Logout", () => {

    cy.get("#logout").click();
    cy.url().should("include", "/");
    cy.get('h2').should('contain', 'Connexion à votre compte');
  });
});
