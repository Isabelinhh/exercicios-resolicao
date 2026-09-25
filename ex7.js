// EXERCÍCIO 7: Bloco Finally
// ============================================================================
console.log("\n=== EXERCÍCIO 7: Bloco Finally ===");

function safeParseWithFinally(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    if (error instanceof SyntaxError) {
      return null;
    }
    throw error;
  } finally {
    console.log("Parse attempt finished");
  }
}

console.log("Cenário Sucesso:");
safeParseWithFinally('{"nome": "Leandromeda"}');

console.log("Cenário Erro:");
safeParseWithFinally('texto inválido');