// Função que calcula o nível do jogador com base nas vitórias e derrotas
function calcularNivel(vitorias, derrotas) {
  // Calcular o saldo de Rankeadas
  let saldoVitorias = vitorias - derrotas;

  // Determinar o nível com base nas vitórias
  let nivel;

  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  // Retornar o resultado
  return `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`;
}

// Exemplo de uso da função
let resultado = calcularNivel(60, 20);
console.log(resultado);
