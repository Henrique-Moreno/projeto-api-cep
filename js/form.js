window.onload = () => {
  document.getElementById('cadastroForm').reset();
  document.getElementById('mensagemCepInvalido').classList.add('d-none');
};

document.getElementById('cadastroForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const cep = document.getElementById('cep').value.trim();

  if (!nome || !email || !telefone || !cep) {
    document.querySelectorAll('small').forEach(err => err.classList.remove('d-none'));
    return;
  }

  alert('Formulário enviado com sucesso!');
  window.location.href = '/login.html';
});

document.getElementById('cep').addEventListener('input', () => {
  const cep = document.getElementById('cep').value;
  if (cep.length === 8) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => {
        if (data.erro) {
          document.getElementById('mensagemCepInvalido').innerText = 'CEP inválido.';
          document.getElementById('mensagemCepInvalido').classList.remove('d-none');
          return;
        }

        document.getElementById('endereco').value = data.logradouro || '';
        document.getElementById('bairro').value = data.bairro || '';
        document.getElementById('cidade').value = data.localidade || '';
        document.getElementById('estado').value = data.uf || '';
        document.getElementById('mensagemCepInvalido').classList.add('d-none');
      })
      .catch(() => {
        document.getElementById('mensagemCepInvalido').innerText = 'Erro ao buscar o CEP.';
        document.getElementById('mensagemCepInvalido').classList.remove('d-none');
      });
  } else {
    document.getElementById('mensagemCepInvalido').classList.add('d-none');
  }
});