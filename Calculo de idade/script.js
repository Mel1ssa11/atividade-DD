 function calcularIdade() {
      const ano = document.getElementById('ano').value;
      const res = document.getElementById('resultado');
      const atual = new Date().getFullYear();

      if (!ano) {
        res.textContent = 'Por favor, digite um ano.';
        return;
      }
      if (ano < 1900 || ano > atual) {
        res.textContent = 'Ano inválido. Digite um ano entre 1900 e o atual.';
        return;
      }
      const idade = atual - ano;
      res.textContent = `Você tem ${idade} ano${idade === 1 ? '' : 's'}.`;
    }