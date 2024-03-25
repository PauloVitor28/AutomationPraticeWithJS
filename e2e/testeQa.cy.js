describe('interaction with elements', () => {
  it('Write the register steps correctly', () => {
    cy.visit('https://testautomationpractice.blogspot.com')
    cy.get("input#name").should('be.visible')
      .click().type('Paulo Vitor')
    cy.get("input#email").should('be.visible')
      .click().type('paulovitor@gmail.com')
    cy.get("input#phone").should('be.visible')
      .click().type('12345678')
    cy.get("textarea#textarea").should('be.visible')
      .click().type('brazil')
  })
  it('Radio,checkboxes & select buttons', () => {
    cy.visit('https://testautomationpractice.blogspot.com')
    cy.get("input#male").check().should('be.checked')
    cy.get('#sunday').check().should('be.checked')
    cy.get('#sunday').uncheck().should('not.be.checked')
    cy.get('select#country.form-control').select('brazil')
    cy.get('select#colors.form-control').select('white')
    cy.get('input#datepicker').type('25/03/2024')
  })
  it('Alerts and double click', () => {
    cy.visit('https://testautomationpractice.blogspot.com')
    cy.get("button[onclick='myFunctionAlert()']").click()
    cy.on('window:alert', (t)=>{
      expect(t).to.contains('I am an alert box!')
    cy.get("button[ondblclick='myFunction1()']").dblclick()

    })
  })
})