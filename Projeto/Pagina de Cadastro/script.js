// Adicione um event listener ao formulário
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Aqui você pode adicionar a lógica de validação e envio dos dados
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simples exemplo de validação
    if (email === '' || password === '') {
        alert('Por favor, preencha todos os campos.');
    } else {
        // Enviar os dados para o servidor (exemplo usando fetch)
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Lógica para lidar com a resposta do servidor
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    }
});