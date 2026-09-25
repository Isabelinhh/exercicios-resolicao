// EXERCÍCIO 12: Step Over, Step Into e Step Out
// ============================================================================
console.log("\n=== EXERCÍCIO 12: Step Over, Step Into e Step Out ===");

function externo(n) {
  return interno(n) + 1;
}

function interno(m) {
  return m * 3;
}

// Para testar: chame a função
externo(4);

/*
  Diferença prática na depuração de 'externo(4)':

  - Step Over (F10): Avança para a próxima linha da função atual ('externo'). Se estiver na linha que chama 'interno(n)', ele executa 'interno' por completo em segundo plano e pula direto para a linha seguinte sem entrar dentro dela.
  - Step Into (F11): "Entra" no bloco da função chamada. Se estiver na linha 'interno(n)', ele move o cursor de depuração para a primeira linha de instrução DENTRO da função 'interno'.
  - Step Out (Shift + F11): Conclui a execução da função atual onde você está ('interno') e retorna o cursor imediatamente para a função chamadora ('externo'), exatamente no ponto após a chamada.
*/