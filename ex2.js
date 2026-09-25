16 console.log("\n=== EXERCÍCIO 2: Erros sem Exceções ===");
17 
18 function exemploErroSemExcecao() {
19   // Exemplo: Divisão por zero em JavaScript não lança exceção, retorna Infinity.
20   const resultado = 10 / 0; 
21   console.log(`Resultado da divisão por zero: ${resultado}`); // Infinity (comportamento "inesperado", mas sem crash)
22 
23   // Outro exemplo: Acessar uma propriedade inexistente em um objeto traz undefined.
24   const usuario = {};
25   console.log(`Propriedade inexistente: ${usuario.idade}`); // undefined
26 }
27 
28 exemploErroSemExcecao();
//Linha 16: Imprime o cabeçalho do exercício com uma quebra de linha (\n).
// Linha 18: Declara a função chamada exemploErroSemExcecao.
//Linha 20: Realiza uma divisão por zero e armazena na constante resultado. Em JS, isso não gera exceção (throw), apenas produz o valor matemático especial Infinity.
//Linha 21: Imprime no console a frase formatada contendo a variável resultado (Infinity).
//Declara o objeto vazio chamado usuario.
//Linha 25: Tenta acessar a propriedade idade que não existe dentro do objeto usuario. Em vez de dar erro, o JS retorna undefined