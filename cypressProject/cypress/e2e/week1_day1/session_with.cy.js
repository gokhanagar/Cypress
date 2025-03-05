describe('session olmasaydi', () => {
    const email = "testgokhan5@gmail.com";
    const password = 12345;

    beforeEach(() => {
        cy.session("ziyaretci",()=>{
            cy.visit("https://www.automationexercise.com/") // siteye gitme
            cy.get("[href='/login']").click(); // login butonuna tiklama
            cy.get("[action='/login'] [placeholder='Email Address']").type(email); // email adresini girme      
            cy.get("[action='/login'] [placeholder='Password']").type(password); // password girme  
            cy.get("[action='/login'] [data-qa='login-button']").click(); // login butonuna tiklama
            cy.url().should("eq","https://www.automationexercise.com/");
        });
        cy.visit("https://www.automationexercise.com/")
    });

    it('test 1', () => {
        //cy.visit("https://www.automationexercise.com/")
        cy.get("[href='/logout']").should("be.visible");
    });

    it('test 2', () => {
       // cy.visit("https://www.automationexercise.com/")
        cy.get("[href='/logout']").should("be.visible");
    });

    it('test 3', () => {
      //  cy.visit("https://www.automationexercise.com/")
        cy.get("[href='/logout']").should("be.visible");

    });

    it('test 4', () => {
      //  cy.visit("https://www.automationexercise.com/")
        cy.get("[href='/logout']").should("be.visible");

    });
    
    it('test 5', () => {
       // cy.visit("https://www.automationexercise.com/")
        cy.get("[href='/logout']").should("be.visible");
    });
});


