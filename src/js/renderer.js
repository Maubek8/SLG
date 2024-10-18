document.addEventListener('DOMContentLoaded', () => {
    // Função de login
    const loginButton = document.getElementById('login-button');
    if (loginButton) {
        loginButton.addEventListener('click', () => {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === 'admin' && password === '1234') {
                window.location.href = 'dashboard.html';  // Redireciona para o dashboard
            } else {
                alert('Usuário ou senha inválidos');
            }
        });
    }

    // Carregar gráficos e cronograma no dashboard
    if (window.location.pathname.endsWith('dashboard.html')) {
        generateCharts();
        loadSchedule();
    }
});
