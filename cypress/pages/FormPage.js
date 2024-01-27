class FormPage {
  elements = {
    getActiveStepTitle: () => cy.get('[data-testid="step-title"]'),
    getFullNameInput: () => cy.get('[data-testid="form-input-name"]'),
    getEmailInput: () => cy.get('[data-testid="form-input-email"]'),
    getPhoneInput: () => cy.get('[data-testid="form-input-phone"]'),
    getNextStepBtn: () => cy.get('button:contains("Next Step")'),
    getConfirmBtn: () => cy.get('button:contains("Confirm")'),
    getConfirmationText: () => cy.get('h2:contains("Thank you!")'),
    getPlanFirstOption: () => cy.get('[data-testid="plan-Arcade"]'),
    getAddOnFirstOption: () => cy.get('[data-testid="add-on-1"]'),
  };

  clickNextStepBtn() {
    this.elements.getNextStepBtn().click()
  }

  clickConfirmBtn() {
    this.elements.getConfirmBtn().click()
  }
}

module.exports = new FormPage();
