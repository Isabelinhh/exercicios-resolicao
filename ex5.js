// EXERCÍCIO 5: Try…Catch Básico
// ============================================================================
console.log("\n=== EXERCÍCIO 5: Try...Catch Básico ===");

function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    return null;
  }
}

console.log(safeParse('{"nome": "Leandromeda"}')); // → { nome: "Leandromeda" }
console.log(safeParse('texto inválido'));         // → null