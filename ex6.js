// EXERCÍCIO 6: Tratamento Condicional de Exceções
// ============================================================================
console.log("\n=== EXERCÍCIO 6: Tratamento Condicional de Exceções ===");

function safeParseCondicional(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    if (error instanceof SyntaxError) {
      return null;
    }
    // Relança qualquer outro erro que não seja SyntaxError
    throw error;
  }
}

console.log(safeParseCondicional('{"nome": "Leandromeda"}')); // → { nome: "Leandromeda" }
console.log(safeParseCondicional('texto inválido'));         // → null