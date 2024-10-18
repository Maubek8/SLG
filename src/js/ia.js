require('dotenv').config();

const apiKey = process.env.OPENAI_API_KEY;

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
