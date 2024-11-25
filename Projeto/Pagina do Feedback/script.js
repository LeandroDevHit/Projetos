// Ação do formulário de reportar problema
document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio real do formulário

    const endereco = document.getElementById('endereco').value;
    const descricao = document.getElementById('descricao').value;
    const imagem = document.getElementById('imagem').files[0];

    if (endereco === "" || descricao === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
    } else {
        let formData = new FormData();
        formData.append("endereco", endereco);
        formData.append("descricao", descricao);

        // Se o usuário carregou uma imagem, adicionamos ela ao FormData
        if (imagem) {
            formData.append("imagem", imagem);
        }

        // Exemplo de envio via fetch (no backend você deve processar os dados)
        fetch("/enviar-reporte", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Problema reportado com sucesso!");
                document.getElementById('reportForm').reset(); // Limpa o formulário
            } else {
                alert("Houve um erro ao enviar seu reporte. Tente novamente.");
            }
        })
        .catch(error => {
            alert("Houve um erro ao enviar seu reporte. Tente novamente.");
        });
    }
});
