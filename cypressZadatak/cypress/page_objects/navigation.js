class NavBar {

  get gradeBookBtn() {
    return cy.get('a[href="/gradebooks"]');
  }

  get professorsBtn() {
    return cy.get('a[href="/professors"]');
  }

  get createGradebookBtn() {
    return cy.get('a[href="/gradebook/create"]');
  }

  get createProfessorBtn() {
    return cy.get('a[href="/professors/create"]');
  }

  get myGradebookBtn() {
    return cy.get('a[href="/my-gradebook"]');
  }

  visiableBtn() {
    this.gradeBookBtn.should('exist');
    this.professorsBtn.should('exist');
    this.createGradebookBtn.should('exist');
    this.createProfessorBtn.should('exist');
    this.myGradebookBtn.should('exist');
  }

}

export const navBar = new NavBar();
