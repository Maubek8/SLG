function login() {
  // Simulação de autenticação
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'admin' && password === '1234') {
    window.location.href = 'dashboard.html'; // Redireciona para o Dashboard
  } else {
    alert('Usuário ou senha inválidos');
  }
}

