describe('Session with 2', () => {
    const email = "testgokhan5@gmail.com";
    const password = 12345;


    const loginMethod=(email,password)=>{

        cy.session([email,password],()=>{

            cy.visit("https://www.automationexercise.com/") // siteye gitme
            cy.get("[href='/login']").click(); // login butonuna tiklama
            cy.get("[action='/login'] [placeholder='Email Address']").type(email); // email adresini girme      
            cy.get("[action='/login'] [placeholder='Password']").type(password); // password girme  
            cy.get("[action='/login'] [data-qa='login-button']").click(); // login butonuna tiklama
            cy.url().should("eq","https://www.automationexercise.com/");


        });
     };


     it('giris testi', () => {
        loginMethod(email,password);
        cy.visit("https://www.automationexercise.com/");
        cy.get("[href='/logout']").should("be.visible");
     });

     it('giris testi2', () => {
        loginMethod(email,password);
        cy.visit("https://www.automationexercise.com/") 
        cy.get("[href='/logout']").should("be.visible");
     });
});



