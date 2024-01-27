import { beforeEach } from "mocha";
const formPage = require('../pages/FormPage');

describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  context('First step', () => {
    it('should go to next step when fields filled', () => {
      formPage.elements.getFullNameInput().type('First name');
      formPage.elements.getEmailInput().type('test@exampl.com');
      formPage.elements.getPhoneInput().type('123123123');
      formPage.elements.getNextStepBtn().should('exist');

      formPage.clickNextStepBtn();
      formPage.elements.getActiveStepTitle().should('contain', 'Select your plan');
    });

    it('should show error when clicked next step and fields are empty', () => {
      formPage.clickNextStepBtn();

      cy.get('[data-testid="form-input-name"] > .label-wr > .error-msg').should('contain', 'This field is required');
      cy.get('[data-testid="form-input-phone"] > .label-wr > .error-msg').should('contain', 'This field is required');
      cy.get('[data-testid="form-input-email"] > .label-wr > .error-msg').should('contain', 'This field is required');
      formPage.elements.getActiveStepTitle().should('not.contain', 'Select your plan');
    });

    it('should show email error when submit on invalid field value', () => {
      formPage.elements.getEmailInput().type('testxampl.com');
      formPage.clickNextStepBtn();
      cy.get('[data-testid="form-input-email"] > .label-wr > .error-msg').should('contain', 'Invalid email address');
    });

    it('should show phone error when submit on invalid field value', () => {
      formPage.elements.getPhoneInput().type('123');
      formPage.clickNextStepBtn();
      cy.get('[data-testid="form-input-phone"] > .label-wr > .error-msg').should('contain', 'Invalid phone number');
    });
  });

  context('Second step', () => {
    beforeEach(() => {
      formPage.elements.getFullNameInput().type('First name');
      formPage.elements.getEmailInput().type('test@exampl.com');
      formPage.elements.getPhoneInput().type('123123123');
      formPage.clickNextStepBtn();
    });

    it('should go to next step when fields filled', () => {
      formPage.elements.getArcanePlanOption().click();
      formPage.clickNextStepBtn();
      formPage.elements.getActiveStepTitle().should('contain', 'Pick add-ons');
    });

    it('should show error when clicked next step and plan is not selected', () => {
      formPage.clickNextStepBtn();
      cy.get('.error-msg').should('contain.text', 'Select one of the plans above')
    });
  });

  context('Third step', () => {
    beforeEach(() => {
      formPage.elements.getFullNameInput().type('First name');
      formPage.elements.getEmailInput().type('test@exampl.com');
      formPage.elements.getPhoneInput().type('123123123');
      formPage.clickNextStepBtn();
      formPage.elements.getArcanePlanOption().click();
      formPage.clickNextStepBtn();
    });

    it('should go to next step when  add on is selected', () => {
      formPage.elements.getAddOnFirstOption().click();
      formPage.clickNextStepBtn();
      formPage.elements.getActiveStepTitle().should('contain', 'Finishing up');
    });

    it('should go to next step when no addons are selected', () => {
      formPage.clickNextStepBtn();
      formPage.elements.getActiveStepTitle().should('contain', 'Finishing up');
    });
  });

  context.only('Fourth step', () => {
    beforeEach(() => {
      formPage.elements.getFullNameInput().type('First name');
      formPage.elements.getEmailInput().type('test@exampl.com');
      formPage.elements.getPhoneInput().type('123123123');
      formPage.clickNextStepBtn();
    });

    it('should display Arcade when first plan selected', () => {
      formPage.elements.getArcanePlanOption().click();
      formPage.clickNextStepBtn();
      formPage.clickNextStepBtn();
      cy.get('.form-summary__plan > div > p').should('contain.text', 'Arcade')
    });

    it('should display Pro when first plan selected', () => {
      formPage.elements.getProPlanOption().click();
      formPage.clickNextStepBtn();
      formPage.clickNextStepBtn();
      cy.get('.form-summary__plan > div > p').should('contain.text', 'Pro')
    });

    it('should display selected addons', () => {
      formPage.elements.getArcanePlanOption().click();
      formPage.clickNextStepBtn();
      formPage.elements.getAddOnFirstOption().click();
      formPage.elements.getAddOnSecondOption().click();
      formPage.clickNextStepBtn();

      cy.get('.form-summary__plan > div > p').should('contain.text', 'Arcade')
      cy.get('.form-summary__add-ons').should('contain.text', 'Online service')
      cy.get('.form-summary__add-ons').should('contain.text', 'Larger storage')
    });

    it('if paymentPeriod month - should display monthly prices in summary', () => {
      formPage.elements.getArcanePlanOption().click();
      formPage.clickNextStepBtn();
      formPage.elements.getAddOnFirstOption().click();
      formPage.clickNextStepBtn();

      cy.get('.form-summary__plan').should('contain.text', '/mo');
      cy.get('.form-summary__add-ons').should('contain.text', '/mo');
      cy.get('.form-summary__total').should('contain.text', '/mo');
    });

    it('if paymentPeriod year - should display yearly prices in summary', () => {
      formPage.elements.getArcanePlanOption().click();
      formPage.togglePaymentPeriod();
      formPage.clickNextStepBtn();
      formPage.elements.getAddOnFirstOption().click();
      formPage.clickNextStepBtn();

      cy.get('.form-summary__plan').should('contain.text', '/year');
      cy.get('.form-summary__add-ons').should('contain.text', '/year');
      cy.get('.form-summary__total').should('contain.text', '/year');
    });
  });
});
