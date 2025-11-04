 function verificarNumero() {
      const valor = document.getElementById('numero').value;
      const res = document.getElementById('resultado');

      if (valor === '') {
        res.textContent = 'Por favor, digite um número.';
        return;
      }

      const numero = Number(valor);
      const tipo = numero % 2 === 0 ? 'par' : 'ímpar';
      res.textContent = `O número ${numero} é ${tipo}.`;
    }