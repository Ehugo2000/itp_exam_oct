describe ('user can press a button', () => {
    it('test', () => {
        cy.visit('http://localhost:3001')
        cy.get('#quote').click()
    } )
})