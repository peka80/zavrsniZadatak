class AddProf {
  get enterName() {
    return cy.get("#input-default");
  }

  get enterLastName() {
    return cy.get("#input-default1");
  }

  get submitBtn() {
    return cy.get('button').contains('Submit');
  }

  createProf(firstName, lastName) {
    this.enterName.clear().type(firstName);
    this.enterLastName.clear().type(lastName);
    this.submitBtn.click();
  }

}

export const addProf = new AddProf();
