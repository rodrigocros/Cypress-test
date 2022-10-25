context('testesCalc',() =>{

    before(() => {
        cy.visit('https://www.calculadora-online.xyz/')
    });

    // afterEach(() => {
    //     cy.get('#C').click()
    // });(() => {
        
    // });

    it('teste1+2', () => {
        // cy.visit('https://www.calculadora-online.xyz/')

        cy.get('#un').click()
        cy.get('#addition').click()
        cy.get('#deux').click()
        cy.get('#egale').click()
        // cy.get('#C').click()

        var resultado = cy.get('#total').invoke('text').then(val1 =>{
            expect(val1).to.equal('3')
        });
        
        if(resultado)
            console.log('sucesso!')


    });
    
    // it('teste11+3', () => {
    //     // cy.visit('https://www.calculadora-online.xyz/')

    //     cy.get('#un').click()
    //     cy.get('#un').click()
    //     cy.get('#addition').click()
    //     cy.get('#trois').click()
    //     cy.get('#egale').click()
    //     // cy.get('#C').click()

    // });
})