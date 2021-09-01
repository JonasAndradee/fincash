describe('The Login Page', () => {
  it('SignIn successfully', () => {
    cy.visit('http://localhost:3000/login')

    cy.get('input[id=email]').type("jonas@gmail.com")
    cy.get('input[id=password]').type("123456")

    cy.get('button[id=button-login]').click()

    cy.url().should('include', '/')
    cy.getCookie('accessToken').should('exist')
  })

  it('SignIn e-mail invalid', () => {
    cy.visit('http://localhost:3000/login')

    cy.get('input[id=email]').type("jonas")
    cy.get('input[id=password]').type("123456")

    cy.get('button[id=button-login]').click()
    
    cy.get('#error').contains("Endereço de e-mail inválido")
  })
})