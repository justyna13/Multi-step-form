declare namespace Cypress {
  interface Chainable {
    getByTestUid(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>
  }
}

Cypress.Commands.add("getByTestUid", (selector) => {
  return cy.get(`[data-testuid=${selector}]`)
})

