// renderer.js

// Exemplo: adicione um evento de clique ao botão "Entrar"
document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('login-button');
    if (loginButton) {
        loginButton.addEventListener('click', () => {
            // Aqui você pode incluir lógica de validação de login ou outras interações
            alert('Botão "Entrar" foi clicado!');
        });
    }

    // Exemplo: usar funções expostas no `preload.js`
    if (window.electronAPI) {
        window.electronAPI.exemploFuncao();
    }
});
