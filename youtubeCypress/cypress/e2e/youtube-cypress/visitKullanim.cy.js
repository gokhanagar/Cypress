describe('Temel Komutlar', () => {
    it('Temel komutlar cy.visit Kullanim', () => {
        cy.visit("/") // baseUrl tanimlandiysa
        cy.visit("/bireysel") // baseUrl tanimlandiysa sadece path
        cy.visit("https://www.hepsipay.com/bireysel") // baseUrl tanimlanmadiysa
        cy.visit({
            url: "https://www.hepsipay.com/",
            method: "GET"
        })
    });

    it.('Temel Komutlar cy.title Kullanimi', () => {
        cy.title().should('eq', "Hepsipay - Güvenli Dijital Cüzdan ve Hızlı Ödeme")// title tam esitlik olursa dogrular
        cy.title().should('include', "Hepsipay - Güven"); // title icerisinde hepsipay geciyorsa dogrular
        cy.title().should('contain', "Hepsipay - Güven"); // title icerisinde hepsipay geciyorsa dogrular
    });

    it('Temel komutlar cy.url ve cy.location kullanimi', () => {
        cy.url().should('eq', 'https://www.hepsipay.com/') // url tam esiklik olursa dogrular
        cy.url().should('include', 'hepsipay') // url icerisinde hepsipay geciyorsa dogrular

        cy.location('pathname').should('eq', '/bireysel') // gidilen pathi dogrulamis oluyoruz
        cy.location('protocol'.should('eq', 'https')) // gidilen protolu dogrular
        cy.location('hostname').should('eq', 'https://www.hepsipay.com/')// tam esiklikte dogrular
        cy.location('hostname').should('include', 'hepsipay') // hepsipay icerirse hostname dogrular

    });

    it('Temel Komutlar cy.get kullanimi', () => {
        cy.get('#button') //dogru kullanim
        cy.get('#button').as('deneme') // alias verme cy.get('@deneme)
        cy.get('a[href="example')
        cy.get('.dropdown-menu-list')
        cy.get('deneme.button')
    });

    it('Temel Komutlar cy.log kullanimi', () => {
        cy.log('Temel komut cy.log kullanimi') // loglama yapar
        cy.get('#button').log('Buton bulundu') // loglama yapar;
        cy.log('Buton bulundu')
        
    });










});