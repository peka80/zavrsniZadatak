import { loginAuth } from "../page_objects/loginAuth";
import { navBar } from "../page_objects/navigation";
import { addProf } from "../page_objects/addProf"

const faker = require("faker");
describe('Login POM', () => {

  let validEmail = "petar.dragovic@gmail.com";
  let validPass = "peksel2002";

  let professorData = {
    randomName: faker.name.findName(),
    randomLastName: faker.name.lastName(),
  }

  before('visit app', () => {
    cy.visit('/')
    cy.url().should('include', '/login')

    loginAuth.login(validEmail, validPass);

  });

  xit('login with valid credentials', () => {
    cy.url().should('contains', '/login');

    loginAuth.login(validEmail, validPass);

    cy.url().should('not.contains', '/login');
    navBar.visiableBtn();
  });

  it('add professor', () => {
    cy.wait(1000);
    navBar.createProfessorBtn.click();
    addProf.createProf(professorData.randomName, professorData.randomLastName);

  });

});
