const addloading = () => {
    const button = document.querySelector('button');
    button.innerHTML = '<img src="img/OIP-removebg-preview.png" class="loading">';
}

const removeloading = () => {
    const button = document.querySelector('button');
    button.innerHTML = 'Enviar';
}

const handleSubimit = (event) => {
    event.preventDefault();
    addloading();

    const Modelo = document.querySelector('select[name=mdl]').value
    const Cliente = document.querySelector('select[name=clt]').value
    const Quantidade = document.querySelector('input[name=qtd]').value
    const Data = document.querySelector('input[name=dta]').value
    const Descricao = document.querySelector('textarea[name=dst]').value

    fetch('https://api.sheetmonkey.io/form/mBa7Acotq4bwp5GiBQkVGT', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Quantidade, Modelo, Cliente, Data, Descricao }),
    }).then(() => removeloading()).then(() => alert("dados enviados!!!"))
}

document.querySelector('form').addEventListener('submit', handleSubimit);