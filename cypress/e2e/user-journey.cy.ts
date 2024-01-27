import { beforeEach } from "mocha";
const formPage = require('../pages/FormPage');

describe('User journey - user fills the pages', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('user can fill full pages', () => {
    // first step active
    formPage.elements.getActiveStepTitle().should('contain', 'Personal info');

    formPage.elements.getFullNameInput().type('First name');
    formPage.elements.getEmailInput().type('test@exampl.com');
    formPage.elements.getPhoneInput().type('123123123');
    formPage.elements.getNextStepBtn().should('exist');

    formPage.clickNextStepBtn();

    // second step active
    formPage.elements.getActiveStepTitle().should('contain', 'Select your plan');
    formPage.elements.getArcanePlanOption().click();
    formPage.elements.getNextStepBtn().should('exist');

    formPage.clickNextStepBtn();

    // third step active
    formPage.elements.getActiveStepTitle().should('contain', 'Pick add-ons');
    formPage.elements.getAddOnFirstOption().click();
    formPage.elements.getNextStepBtn().should('exist');

    formPage.clickNextStepBtn();

    // fourth step active
    formPage.elements.getActiveStepTitle().should('contain', 'Finishing up');
    formPage.elements.getConfirmBtn().should('exist');

    formPage.clickConfirmBtn();

    // form confirmation visible
    formPage.elements.getConfirmationText().should('exist');
  })
});
