function sortear() {
  const input = document.getElementById('lista').value.trim();

  // Divide os dados por vírgulas, quebras de linha, ponto e vírgula, tabulação ou múltiplos espaços
  const itens = input
    .split(/[\n,;|\t]+|\s{2,}/)
    .map(item => item.trim())
    .filter(item => item.length > 0);

  if (itens.length === 0) {
    document.getElementById('resultado').innerText = 'Nenhum dado válido fornecido.';
    return;
  }

  const sorteado = itens[Math.floor(Math.random() * itens.length)];
  document.getElementById('resultado').innerText = sorteado;
}
