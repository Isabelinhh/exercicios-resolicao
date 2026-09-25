// EXERCÍCIO 10: Preparação do Ambiente de Depuração
// ============================================================================
console.log("\n=== EXERCÍCIO 10: Preparação do Ambiente de Depuração ===");

/*
  Passos para abrir e ativar o DevTools:
  1. No navegador (Chrome, Edge ou Firefox), abra a aplicação ou página HTML.
  2. Pressione a tecla F12 ou utilize o atalho Ctrl + Shift + I (Cmd + Option + I no macOS). Alternativamente, clique com o botão direito na página e selecione "Inspecionar".
  3. No menu superior da janela do DevTools que abriu, clique na aba "Sources" (ou "Depurador" em Firefox/português).
*/

console.log("Ex. 10 respondido nos comentários do código.");


// ============================================================================
// EXERCÍCIO 11: Uso do debugger
// ============================================================================
console.log("\n=== EXERCÍCIO 11: Uso do debugger ===");

function testeDebug(x) {
  const y = x * 2;
  debugger; // Ponto de interrupção
  return y;
}

testeDebug(5);

/*
  Relatório de Experiência com 'debugger':
  Ao carregar a página com as DevTools abertas, o script pausou automaticamente a execução na linha do comando 'debugger'. 
  O painel destacou a variável x com valor 5 e a variável y já atribuída como 10 no escopo Local, permitindo inspecionar o estado do programa em tempo real antes do retorno.
*/