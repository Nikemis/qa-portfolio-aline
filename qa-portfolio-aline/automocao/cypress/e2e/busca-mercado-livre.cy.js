describe('Busca de produtos no Mercado Livre', () => {

  Cypress.on('uncaught:exception', () => false)

  it('Deve retornar resultados ao buscar um produto', () => {
    cy.visit('https://www.mercadolivre.com.br/')

    // Aceita cookies se aparecer o pop-up
    cy.get('body').then(($body) => {
      if ($body.find('button[data-testid="action:understood-button"]').length) {
        cy.get('button[data-testid="action:understood-button"]').click()
      }
    })

    // Faz a busca
    cy.get('input[name="as_word"]').type('notebook{enter}')

    // Entra no novo domínio da lista de resultados
    cy.origin('https://lista.mercadolivre.com.br', () => {
      cy.get('a.poly-component__title', { timeout: 15000 })
        .should('be.visible') // garante que existe pelo menos um resultado visível
        .and('contain.text', 'Notebook') // valida que o título contém "Notebook"
    })
  })
})
