// EXERCÍCIO 13: Call Stack
// ============================================================================
console.log("\n=== EXERCÍCIO 13: Call Stack ===");

/*
  Diagrama da Call Stack no momento em que a função 'interno' está sendo executada:

  |-----------------------|
  |   interno(m = 4)      |  <-- Topo da pilha (Executando agora)
  |-----------------------|
  |   externo(n = 4)      |  <-- Aguardando o retorno de 'interno'
  |-----------------------|
  |   (Global / Script)   |  <-- Base da pilha (Chamada inicial)
  |-----------------------|

  Representação simplificada em texto:
  
  ▶ (Global Scope)
    ▶ externo
      ▶ interno
*/

console.log("Ex. 13 respondido nos comentários do código.");