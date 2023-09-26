describe("Sign in complete test", () => {
  it("Successfull", () => {
    cy.visit("/");

    cy.get("#email").type("yohann@kipdev.io");
    cy.get("#password").type("Hello123;");
    cy.get("#myForm").submit();

    cy.url().should("include", "/dashboard");
  });

  it("Error", () => {
    cy.visit("/");

    cy.get("#email").type("yohann@kipdev.com");
    cy.get("#password").type("Hello123;");
    cy.get("#myForm").submit();
    cy.get(".Toastify__toast-icon").should("exist");
  });

  it("Test redirection", () => {
    cy.visit("/dashboard");

    cy.url().should("include", "/");
    cy.get('h2').should('contain', 'Connexion à votre compte');
  });
});
