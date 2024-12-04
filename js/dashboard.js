document.addEventListener('DOMContentLoaded', () => {
  const user = localStorage.getItem('session');
  if (!user) window.location.href = 'login.html';
  document.getElementById('username').textContent = user;
});

document.getElementById('logout').addEventListener('click', () => {
  localStorage.removeItem('session');
  window.location.href = 'login.html';
});

