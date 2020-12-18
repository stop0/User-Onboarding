describe('Header Text', function() {
    it('Checks if header text exists', function () {
    cy.visit("http://localhost:3000");
    cy.get('.Name')
        .type("Mohammed")
        .should('have.value','Mohammed')
    cy.get('.email')
        .type("dawodmohmmed@gmail.com")
        .should('have.value','dawodmohmmed@gmail.com')
    cy.get('.password')
        .type("HotWheels")
        .should('have.value','HotWheels')
    cy.get(".terms").not('[disabled]')
    .check().should('be.checked')
    cy.get(".submit")
    .click()
    })
})
