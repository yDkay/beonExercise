/// <reference types="cypress" />

describe("Test beon.tech website", () => {
  it("Setup", () => {
    cy.intercept("POST", "**/cdn.dreamdata.cloud/api/v1/p").as(
      "dreamdataCloudV1"
    );
    cy.intercept("POST", "**/app.clearbit.com/v1/p").as("clearbitV1");
    cy.visit("https://beon.tech/");
    //
    cy.wait("@dreamdataCloudV1").its("response.statusCode").should("eq", 200);
    cy.wait("@clearbitV1").its("response.statusCode").should("eq", 200);

    cy.get(".gap-y-0").should(
      "contain.html",
      "Connecting Rockstar Engineers With Elite U.S. Jobs"
    );
    cy.get(".px-5 > .items-center").contains("Hire developers").click();

    cy.url().should("eq", "https://beon.tech/companies");

    cy.get(".gap-y-24").contains(
      "Get access to our mine of rigorously vetted talent."
    );

    cy.TestTextFullPage(
      "Browse through candidates, review in-depth insights, and start scheduling intro meetings today."
    );

    cy.get(".cursor-pointer > .object-contain").click();

    cy.url().should("eq", "https://beon.tech/engineers");
    cy.checkUrlIs("https://beon.tech/engineers");
  });
});
