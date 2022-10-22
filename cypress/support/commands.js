// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
    const longText = 'Preciso abrir uma reclamação sobre o funcionário que não soube realizar o atendimento na loja parafernalha no dia 15 de janeiro de 2020.'
    cy.get('#firstName')
        .type('João')
    cy.get('#lastName')
        .type('Batista')
    cy.get('#email')
        .type('joaobatista@gmail.com')
    cy.get('#open-text-area')
        .type(longText, { delay: 0 })
    cy.contains('button', 'Enviar')
        .click()
})
