function mostrarMensagem() {
    var nome = document.getElementById("nome").value;
    if (nome) {
        alert("Formulário enviado com sucesso!");
    } else {
        alert("Por favor, preencha o campo nome.");
    }
}