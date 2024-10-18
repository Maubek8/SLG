require('dotenv').config();

const apiKey = process.env.OPENAI_API_KEY;

async function askAI(prompt) {
    if (!prompt) {
        return 'Por favor, digite uma pergunta.';
    }

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
        return data.choices[0].text.trim();
    } catch (error) {
        console.error('Erro:', error);
        return 'Erro ao obter resposta da IA.';
    }
}

module.exports = { askAI };
