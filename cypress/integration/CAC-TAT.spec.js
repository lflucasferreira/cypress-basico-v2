// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function() {
        cy.visit('./src/index.html')
    })
    
    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', function() {
        const longText = 'Preciso abrir uma reclamação sobre o funcionário que não soube realizar o atendimento na loja parafernalha no dia 15 de janeiro de 2020.'
        cy.get('#firstName').type('Lucas')
        cy.get('#lastName').type('Ferreira')
        cy.get('#email').type('lucasferreiras@live.com')
        cy.get('#open-text-area').type(longText, {delay: 0})
        cy.get('button[type="submit"]').click()
        cy.get('.success').should('be.visible')
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        const longText = 'Preciso abrir uma reclamação sobre o funcionário que não soube realizar o atendimento na loja parafernalha no dia 15 de janeiro de 2020.'
        cy.get('#firstName').type('Lucas')
        cy.get('#lastName').type('Ferreira')
        cy.get('#email').type('lucasferreiras@live,com')
        cy.get('#open-text-area').type(longText, {delay: 0})
        cy.get('button[type="submit"]').click()
        cy.get('.error').should('be.visible')
    })

    it.only('campo telefone continua vazio quando preenchido com valor não-numérico', function() {
        cy.get('#phone').type('abcdefghij').should('have.value', '')
    })
})