describe('Verify Add employee Functionalities', () => {


  it('Verify add employee with Mandatory deatils', () => {
 
    cy.visit('/web/index.php/auth/login')
    cy.log("Url Lauch")
    //cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-branding > img').should("be.visible")
    cy.get("input[placeholder='Username']").type(Cypress.env("username"))

    cy.log("Username Typed is "+ Cypress.env("username")) 
    cy.get("input[type='password2']").type(Cypress.env("password"))
    cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button').click()

    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    //cy.get('a[href="/web/index.php/pim/viewPimModule"]').click()
    //or 

    cy.contains("PIM").click()
    cy.contains('Add Employee').click()

    cy.get('input[name="firstName"]').type("Maruthi")
    cy.get('input[name="lastName"]').type("Prasad")

    cy.get('button[type="submit"]').click()
    cy.contains("Successfully Saved").should("be.visible")

    cy.url().should("include", "web/index.php/pim/viewPersonalDetails/empNumber" )



  })

  it('Verify Error massages display for Mandatory fileds', () => {
 
    cy.visit('/web/index.php/auth/login')
    //cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-branding > img').should("be.visible")
    cy.get("input[placeholder='Username']").type(Cypress.env("username"))
    cy.get("input[type='password']").type(Cypress.env("password"))
    cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button').click()

    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    //cy.get('a[href="/web/index.php/pim/viewPimModule"]').click()
    //or 

    cy.contains("PIM").click()
    cy.contains('Add Employee').click()

    cy.get('button[type="submit"]').click()
   

    cy.get('span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').eq(0).should("be.visible")

    cy.get('span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').eq(1).should("be.visible")
  

  })


})