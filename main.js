document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o comportamento padrão de recarregar a página

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Realizar a autenticação
        login(username, password);
    });
});

function login(username, password) {
    if (username === 'admin' && password === '1234') {
        window.location.href = '../../html/dashboard.html';
    } else {
        alert('Usuário ou senha incorretos');
    }
}
