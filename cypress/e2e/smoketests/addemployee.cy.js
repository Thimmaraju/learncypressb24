
import addempdata from "../../fixtures/PIM/addemployee.json"

describe('Verify Add employee Functionalities', function () {


   beforeEach("login", ()=>{

    cy.login("Admin", "admin123")
    //cy.get('a[href="/web/index.php/pim/viewPimModule"]').click()
    //or 

    cy.get('a[href="/web/index.php/pim/viewPimModule"]').click()
    cy.get('a[class="oxd-topbar-body-nav-tab-item"]').eq(1).click()

   })

  if(Cypress.browser.name == "firefox" || "chrome"){

  specify.only('Verify add employee with Mandatory deatils', function () {
 
  

    cy.get('input[name="firstName"]').type(addempdata.firstname)
    cy.get('input[name="lastName"]').type(addempdata.lastname)

    cy.get('button[type="submit"]').click()
    cy.contains("Successfully Saved").should("be.visible")

    cy.url().should("include", "web/index.php/pim/viewPersonalDetails/empNumber" )



  })
  }
  if(Cypress.browser.name == "chrome" || "firefox"){

    specify.only('Verify Error massages display for Mandatory fileds', () => {
 
   
  
      cy.get('button[type="submit"]').click()
     
  
      cy.get('span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').eq(0).should("be.visible")
  
      cy.get('span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').eq(1).should("be.visible")
    
  
    })

  }




})