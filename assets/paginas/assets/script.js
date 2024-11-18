function mostrarMensagem() {
    var nome = document.getElementById("nome").value;
    if (nome) {
        alert("Mensagem Mandada com sucesso. Verifique seu email, que responderemos o mais rapido possivel. Agradecemos por confiar no nosso serviço!");
    } else {
        alert("Por favor, preencha o campo nome.");
    }
}