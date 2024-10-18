document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('login-button');
    const iaPromptInput = document.getElementById('iaPrompt');
    const iaResponseDiv = document.getElementById('iaResponse');

    if (loginButton) {
        loginButton.addEventListener('click', () => {
            alert('Botão "Entrar" foi clicado!');
        });
    }

    // Adicionando funcionalidade para o botão que interage com a IA
    const askAIButton = document.getElementById('askAIButton');
    if (askAIButton) {
        askAIButton.addEventListener('click', async () => {
            const prompt = iaPromptInput.value;
            iaResponseDiv.textContent = 'Aguardando resposta...';

            const response = await window.electronAPI.askAI(prompt);
            iaResponseDiv.textContent = response;
        });
    }
});
