// EXERCÍCIO 9: Depuração com console.log
// ============================================================================
console.log("\n=== EXERCÍCIO 9: Depuração com console.log ===");

function soma(a, b) {
  console.log(`[DEBUG - Antes da soma] Valor de a: ${a} (tipo: ${typeof a})`);
  console.log(`[DEBUG - Antes da soma] Valor de b: ${b} (tipo: ${typeof b})`);
  
  const resultado = a + b;
  
  console.log(`[DEBUG - Depois da soma] Resultado obtido: ${resultado}`);
  return resultado;
}

soma(2, undefined);

/*
  Causa do NaN:
  O resultado é NaN (Not a Number) porque a operação aritmética tenta somar o número 2 com o valor 'undefined'.
  Em JavaScript, a expressão `2 + undefined` resulta semanticamente em NaN, pois 'undefined' não pode ser convertido para um número válido no contexto de adição.
*/