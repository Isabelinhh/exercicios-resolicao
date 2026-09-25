// EXERCÍCIO 3: Confiabilidade Limitada
// ============================================================================
console.log("\n=== EXERCÍCIO 3: Confiabilidade Limitada ===");

/*
  Cenários sem confiança:
  1. Formulários de entrada do usuário no front-end.
  2. Parâmetros passados em URLs (Query Strings / Route Params).
  3. Dados recebidos via APIs externas ou LocalStorage/SessionStorage.

  Estratégia de Validação:
  Sempre validar o tipo e o formato do dado antes de realizar operações matemáticas ou lógicas.
*/

function calcularTotal(precoInput) {
  // Tratamento para garantir tipo 'number' correto
  const preco = Number(precoInput);

  if (isNaN(preco)) {
    console.log("Validação falhou: Número esperado, mas a conversão gerou NaN.");
    return null;
  }

  return preco * 1.1; // Exemplo: aplicando taxa de 10%
}

console.log("Entrada válida (100):", calcularTotal(100));
console.log("Entrada inválida ('texto'):", calcularTotal("texto"));