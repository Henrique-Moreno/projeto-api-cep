document.getElementById('cadastrar').addEventListener('click', () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (!username || !password) return alert('Preencha todos os campos!');
  localStorage.setItem('user', JSON.stringify({ username, password }));
  alert('Usuário cadastrado com sucesso!');
});

document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const user = JSON.parse(localStorage.getItem('user'));
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (!user || user.username !== username || user.password !== password) {
    document.getElementById('loginErro').classList.remove('d-none');
    return;
  }

  localStorage.setItem('session', username);
  window.location.href = '/dashboard.html';
});
