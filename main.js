

const form = document.getElementById('form-atividade')
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputtarefaDia = document.getElementById('tarefa-dia')
    const inputhorarioTarefa = document.getElementById('horario-tarefa')

    let linha = `<tr>`;
    linha += `<td>${inputtarefaDia.value}</td>`;
    linha += `<td>${inputhorarioTarefa.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    alert('Tarefa adicionada' );
})

