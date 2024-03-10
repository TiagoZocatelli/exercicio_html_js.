function validarFormulario() {
    const campoA = parseInt(document.getElementById("campoA").value);
    const campoB = parseInt(document.getElementById("campoB").value);
    const mensagem = document.getElementById("mensagem");

    if (campoB > campoA) {
        mensagem.textContent = `Formulário enviado com sucesso! O número B: ${campoB} é maior que o número A: ${campoA}`;
        mensagem.className = "mensagem positiva";
        document.getElementById("campoA").value = "";
        document.getElementById("campoB").value = "";
    } else {
        mensagem.textContent = "Formulário inválido! O número B deve ser maior que o número A.";
        mensagem.className = "mensagem negativa";
    }
}
