import { getGreeting } from '../support/app.po';

describe('igui', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to igui!');
  });
});
