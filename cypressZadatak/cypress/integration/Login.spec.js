import { loginAuth } from "../page_objects/loginAuth";
import { navBar } from "../page_objects/navigation";
describe('Login POM', () => {

  let validEmail = "petar.dragovic@gmail.com";
  let validPass = "peksel2002";

  before('visit app', () => {
    cy.visit('/')
    cy.url().should('include', '/login')
  });

  it('login with valid credentials', () => {
    cy.url().should('contains', '/login');

    loginAuth.login(validEmail, validPass);

    cy.url().should('not.contains', '/login');
    navBar.visiableBtn();
  });

});
