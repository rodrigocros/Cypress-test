context('idinheiro',() =>{
    it('1500+vl250+vt150', () => {
        cy.visit('https://www.idinheiro.com.br/calculadoras/calculadora-salario-clt-x-pj')

        // cy.get('#monthly__salary').type(1500)
        // cy.get('#transportation__ticket').type(150)
        // cy.get('#meal__ticket').type(250)
        // cy.get('#button__calcular').click()

        // cy.get('monthly__salary')
        // .each(($el,index,$list) =>{
        //     if(index ==1)
        //     cy.get($el).find('#clt__renumeracao')
        //     .invoke('text').then(val1 =>{
        //         expect(val1).to.equal('1500')
        //     })
        // })
    });
    
})