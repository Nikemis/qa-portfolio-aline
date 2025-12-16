# 🟣 Teste Automatizado — Mercado Livre com Cypress

**Objetivo:** Automatizar a verificação da funcionalidade de busca no site Mercado Livre.  
**Ferramenta:** Cypress  

---

## 🔍 Cenário de teste

| ID | Cenário | Resultado Esperado | Status |
|----|----------|--------------------|--------|
| CT-AUTO-001 | Realizar uma busca por "notebook" | Exibir lista de produtos relacionados ao termo pesquisado | ✅ Passou |

---

# Teste de Busca no Mercado Livre (Cypress)
- Executa uma busca por "notebook" no site do Mercado Livre.
- Valida se há resultados visíveis.
## Rodar o teste:
npx cypress open


## 📜 Código utilizado

```javascript
describe('Busca de produtos no Mercado Livre', () => {

  Cypress.on('uncaught:exception', () => false)

  it('Deve retornar resultados ao buscar um produto', () => {
    cy.visit('https://www.mercadolivre.com.br/')

    cy.get('body').then(($body) => {
      if ($body.find('button[data-testid="action:understood-button"]').length) {
        cy.get('button[data-testid="action:understood-button"]').click()
      }
    })

    cy.get('input[name="as_word"]').type('notebook{enter}')

    cy.origin('https://lista.mercadolivre.com.br', () => {
      cy.get('a.poly-component__title', { timeout: 15000 })
        .should('be.visible') 
        .and('contain.text', 'Notebook') 
    })
  })
})
```
---
## Repositório de estudos em Cypress
- [Cypress, do Zero à Nuvem](https://github.com/Nikemis/cypress-do-zero-a-nuvem)
