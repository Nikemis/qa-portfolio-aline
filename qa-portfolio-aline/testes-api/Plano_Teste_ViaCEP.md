
# 🔵 Testes de API — ViaCEP

**Objetivo:** Validar o funcionamento da API pública ViaCEP, que retorna dados de endereço a partir do CEP informado.  
**Título:** Validação API ViaCEP  
**Responsável:** Aline Akemi Nishida  
**Tipo de Teste:** API
**Ambiente:** PostMan   
**Data de Execução:** 10/11/2025  

---

## 🔗 Endpoint testado:
`GET https://viacep.com.br/ws/01001000/json/`

## ✅ Cenários testados:

| ID | Cenário | Resultado Esperado | Status |
|----|----------|--------------------|--------|
| CT-API-001 | Consultar CEP válido (01001000) | Retorna dados de endereço com status 200 | ✅ Passou |
| CT-API-002 | Verificar existência do campo "logradouro" | Campo deve existir e conter valor válido | ✅ Passou |
| CT-API-003 | Validar UF retornado | UF deve ser "SP" | ✅ Passou |

---

## 🧠 Scripts utilizados no Postman:

```javascript
pm.test("Status code é 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Retorna o campo 'logradouro'", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property("logradouro");
});

pm.test("Verifica que o UF é SP", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.uf).to.eql("SP");
});

```
**Processo:**  
📎 [`/Processo_TesteAPI/`](./Processo_TesteAPI/)  
