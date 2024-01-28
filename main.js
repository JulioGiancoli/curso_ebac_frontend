document.getElementById('meuFormulario').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita o envio do formulário padrão
    
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    
    if (campoB > campoA) {
        alert("Formulário válido! Número B é maior que o número A.");
    } else {
        alert("Formulário inválido! Número B deve ser maior que o número A.");
    }
});
