/// <reference types="cypress" />

describe("Test google exercise", () => {
  it("Setup", () => {
    cy.visit("https://www.google.com/");
    cy.get("#APjFqb").type("new york wikipedia");
    cy.get(".FPdoLc > center > .gNO89b").click();
    cy.get("#rcnt")
      .contains("Nova Iorque – Wikipédia, a enciclopédia livre")
      .click();
    //cy.url().should("eq", "https://pt.wikipedia.org/wiki/Nova_Iorque");
  });
});
