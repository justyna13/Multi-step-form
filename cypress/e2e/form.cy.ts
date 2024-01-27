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
    it('passes', () => {
      console.log('first test');
    })
  });

  context('Third step', () => {
    it('passes', () => {
      console.log('first test');
    })
  });

  context('Fourth step', () => {
    it('passes', () => {
      console.log('first test');
    })
  });
});
