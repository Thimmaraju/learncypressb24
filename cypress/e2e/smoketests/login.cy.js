describe('Verify Login functionality ', () => {


    it('Verify Logo visible in login page', () => {
        
     
         cy.visit('/web/index.php/auth/login')
         cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-branding > img').should("be.visible")

      })

      it('Verify login with valid credentials', () => {
        

        cy.login()
        //or 

        cy.get('#app > div.oxd-layout.orangehrm-upgrade-layout > div.oxd-layout-container > div.oxd-layout-context > div > div:nth-child(1) > div > div.orangehrm-dashboard-widget-header > div > p').should("be.visible")

        
     })

     it('Verify login with valid username and Invalid password', () => {
        
         let username = "Admin"
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-branding > img').should("be.visible")
        cy.get("input[placeholder='Username']").type(username)
        cy.get("input[type='password']").type("gjfj")
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button').click()

        cy.get('p.oxd-text.oxd-text--p.oxd-alert-content-text').should("be.visible")

        cy.get('p.oxd-text.oxd-text--p.oxd-alert-content-text').then((text)=>{

            var errorMessage = text.text()
            cy.log(errorMessage)
            expect(errorMessage).to.equal("Invalid credentials")
        })
     })

     it("Verify login with invalid username and valid password", () => {
        

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-branding > img').should("be.visible")
        cy.get("input[placeholder='Username']").type(username)
        cy.get("input[type='password']").type("admin123")
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button').click()

        cy.get('p.oxd-text.oxd-text--p.oxd-alert-content-text').should("be.visible")
        cy.get('p.oxd-text.oxd-text--p.oxd-alert-content-text').then((text)=>{

            var errorMessage = text.text()
            cy.log(errorMessage)
            expect(errorMessage).to.equal("Invalid credentials")
        })

     })

     it('Verify login with invalid username and invalid password', () => {
        
        let creds = {

            "wrongusername": "ewrfbhuh",
            "wrongpassword": "kjfn"
        }

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-branding > img').should("be.visible")
        cy.get("input[placeholder='Username']").type(creds.wrongusername)
        cy.get("input[type='password']").type(creds.wrongusername)
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button').click()

        cy.get('p.oxd-text.oxd-text--p.oxd-alert-content-text').should("be.visible")
        cy.get('p.oxd-text.oxd-text--p.oxd-alert-content-text').then((text)=>{

            var errorMessage = text.text()
            cy.log(errorMessage)

            expect(errorMessage).to.equal("Invalid Password")
        })
     })



  })