class LoginAuth {
  get emailInput() {
    return cy.get("#email");
  }

  get passwordInput() {
    return cy.get("#userPassword");
  }

  get submitBtn() {
    return cy.get("button[type='submit']");
  }

  get logoutBtn() {
    return cy.get("a[role='button ']");
  }

  get errMsg() {
    return cy.get(".alert");
  }



  login(email, pass) {
    this.emailInput.clear().type(email);
    this.passwordInput.clear().type(pass);
    this.submitBtn.click();
  }

}

export const loginAuth = new LoginAuth();
