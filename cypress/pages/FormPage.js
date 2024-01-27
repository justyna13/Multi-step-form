class FormPage {
  elements = {
    getActiveStepTitle: () => cy.get('[data-testid="step-title"]'),
    getFullNameInput: () => cy.get('[data-testid="form-input-name"]'),
    getEmailInput: () => cy.get('[data-testid="form-input-email"]'),
    getPhoneInput: () => cy.get('[data-testid="form-input-phone"]'),
    getPaymentPeriodCheckbox: () => cy.get('[data-testid="checkbox-paymentPeriod"]'),
    getNextStepBtn: () => cy.get('button:contains("Next Step")'),
    getConfirmBtn: () => cy.get('button:contains("Confirm")'),
    getConfirmationText: () => cy.get('h2:contains("Thank you!")'),
    getArcanePlanOption: () => cy.get('[data-testid="plan-Arcade"]'),
    getProPlanOption: () => cy.get('[data-testid="plan-Pro"]'),
    getAddOnFirstOption: () => cy.get('[data-testid="add-on-1"]'),
    getAddOnSecondOption: () => cy.get('[data-testid="add-on-2"]'),
    getAddOnThirdOption: () => cy.get('[data-testid="add-on-3"]'),
  };

  clickNextStepBtn() {
    this.elements.getNextStepBtn().click()
  }

  clickConfirmBtn() {
    this.elements.getConfirmBtn().click()
  }

  togglePaymentPeriod() {
    this.elements.getPaymentPeriodCheckbox().check({ force: true });
  }
}

module.exports = new FormPage();
