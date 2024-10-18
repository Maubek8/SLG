const apiKey = 'sua-chave-api-aqui';  // Insira sua chave de API da OpenAI

async function getAIResponse(prompt) {
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
}

// Exemplo de uso
getAIResponse('Explique o que o SLG faz.').then(response => {
    console.log(response);  // Aqui você pode enviar a resposta para exibição no HTML
});

