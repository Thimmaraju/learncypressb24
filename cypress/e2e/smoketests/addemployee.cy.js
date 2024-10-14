import addempdata from "../../fixtures/PIM/addemployee.json"

describe('Verify Add employee Functionalities', () => {


  it('Verify add employee with Mandatory deatils', () => {
 
      cy.login()
    //cy.get('a[href="/web/index.php/pim/viewPimModule"]').click()
    //or 

    cy.get('a[href="/web/index.php/pim/viewPimModule"]').click()
    cy.get('a[class="oxd-topbar-body-nav-tab-item"]').eq(1).click()

    cy.get('input[name="firstName"]').type(addempdata.firstname)
    cy.get('input[name="lastName"]').type(addempdata.lastname)

    cy.get('button[type="submit"]').click()
    cy.contains("Successfully Saved").should("be.visible")

    cy.url().should("include", "web/index.php/pim/viewPersonalDetails/empNumber" )



  })

  it('Verify Error massages display for Mandatory fileds', () => {
 
    cy.login()
    //cy.get('a[href="/web/index.php/pim/viewPimModule"]').click()
    //or 

    cy.get('a[href="/web/index.php/pim/viewPimModule"]').click()
    //cy.contains('Add Employee').click()

    cy.get('a[class="oxd-topbar-body-nav-tab-item"]').eq(1).click()

    cy.get('button[type="submit"]').click()
   

    cy.get('span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').eq(0).should("be.visible")

    cy.get('span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').eq(1).should("be.visible")
  

  })


})