function login(username, password) {
    if (username === 'admin' && password === '1234') {
        return true;  // Login bem-sucedido
    } else {
        return false;  // Falha no login
    }
}

module.exports = { login };
