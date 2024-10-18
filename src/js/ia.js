const apiKey = 'sk-TawN9PwYPW96nEgQuBt1aWu5pGWp--Dc2jy2afhKrNT3BlbkFJh0pY2yqokE6VuLZsJ6q1qHiKaBQPTzH40O1XXaUSoA';  // Insira sua chave de API da OpenAI

async function askAI() {
    const prompt = document.getElementById('iaPrompt').value;
    
    if (!prompt) {
        document.getElementById('iaResponse').textContent = 'Por favor, digite uma pergunta.';
        return;
    }

    document.getElementById('iaResponse').textContent = 'Aguardando resposta...';

    try {
        const response = await fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: prompt,
                max_tokens: 100
            })
        });

        const data = await response.json();
        document.getElementById('iaResponse').textContent = data.choices[0].text.trim();
    } catch (error) {
        document.getElementById('iaResponse').textContent = 'Erro ao obter resposta da IA.';
        console.error('Erro:', error);
    }
}

