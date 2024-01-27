import { beforeEach } from "mocha"

describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  context('First step', () => {
    it('passes', () => {
      console.log('first test');
    })
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
