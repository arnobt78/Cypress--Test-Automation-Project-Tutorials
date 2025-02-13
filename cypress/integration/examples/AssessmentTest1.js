/// <reference types="Cypress" />

//This automation is created and tested for the following website: https://contacts-dashboard-arnob.vercel.app/ for a job assessment test. The project source code is available at: https://github.com/arnobt78/Contacts-Dashboard--Job-Assessment-Project-1

describe("My First Assessment Test Suite", function () {
  it("First Test Case", function () {
    cy.visit("https://contacts-dashboard-arnob.vercel.app/");
    cy.get("input[placeholder='Search by name or email']").type("co");
    cy.wait(2000);

    // Parent child chaining
    cy.get(
      "div[class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4']"
    ).as("productLocator");

    cy.get("@productLocator")
      .children("div") // Adjust this selector to target the correct child elements
      .each(($el, index, $list) => {
        const textVeg = $el.find("h2.text-xl.font-bold").text();
        if (textVeg.includes("Contact 4")) {
          cy.wrap($el).click();

          // Wait for the popup to appear
          cy.get(
            "div[class='bg-white p-6 rounded shadow-lg max-w-lg w-full relative']"
          ).should("be.visible");

          // Assert the "Phone" number
          cy.get(
            "div[class='bg-white p-6 rounded shadow-lg max-w-lg w-full relative']"
          )
            .contains("Phone:")
            .parent()
            .should("contain.text", "123-456-7893");

          // Close the contact details page
          cy.get(
            "button[class='absolute top-2 right-2 text-gray-500 hover:text-gray-700']"
          ).click();
          // Alternatively, you can use the button with text "x"
          // cy.contains("button", "x").click();
        }
      });
  });

  it("Second Test Case", function () {
    cy.visit("https://contacts-dashboard-arnob.vercel.app/");
    // Check boxes
    cy.get("input[type='checkbox']")
      .check()
      .should("be.checked")
      .and("have.value", "on");
    cy.get("input[type='checkbox']").uncheck().should("not.be.checked");
  });

  it("Third Test Case", function () {
    cy.visit("https://contacts-dashboard-arnob.vercel.app/");
    // Static Dropdown
    cy.get("select").select("Engineering").should("have.value", "Engineering");
  });

  it("Fourth Test Case", function () {
    cy.visit("https://contacts-dashboard-arnob.vercel.app/");
    // Check Pagination

    // Click the "Next" button twice
    cy.contains("button", "Next").click();
    cy.contains("button", "Next").click();

    // Assert the page number is "3 of 8"
    cy.get("div[class='mt-4 flex justify-between items-center'] span").should(
      "contain.text",
      "Page 3 of 8"
    );

    // Click the "Previous" button
    cy.contains("button", "Previous").click();

    // Assert the page number is "2 of 8"
    cy.get("div[class='mt-4 flex justify-between items-center'] span").should(
      "contain.text",
      "Page 2 of 8"
    );

    // Define the alias for product locator
    cy.get(
      "div[class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4']"
    ).as("productLocator");

    // Find the contact name "Contact 8" on page 2 of 8 and check if it is inactive
    cy.get("@productLocator")
      .children("div")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h2.text-xl.font-bold").text();
        if (textVeg.includes("Contact 8")) {
          // Check if the contact is inactive
          cy.wrap($el)
            .find("span[class='w-3 h-3 rounded-full bg-red-500']")
            .should("have.class", "bg-red-500");
        }
      });
  });
});
