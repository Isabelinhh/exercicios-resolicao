// EXERCÍCIO 8: Lançando Erros Customizados
// ============================================================================
console.log("\n=== EXERCÍCIO 8: Lançando Erros Customizados ===");

class InvalidAgeError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidAgeError";
  }
}

function checkAge(age) {
  if (age < 0 || age > 120) {
    throw new InvalidAgeError("Idade fora do intervalo");
  }
  return "Idade válida";
}

// Testes com captura de exceção
const testesIdade = [-5, 30, 200];

testesIdade.forEach((idade) => {
  try {
    console.log(`Testando idade ${idade}:`, checkAge(idade));
  } catch (error) {
    if (error instanceof InvalidAgeError) {
      console.log(`Capturado [${error.name}]: ${error.message}`);
    } else {
      console.log("Erro desconhecido:", error);
    }
  }
});