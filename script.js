let numeroEscolhido = document.querySelector('#numeroEscolhido').value;
let numeroResposta = document.querySelector('.numero');
let btn = document.querySelector('.btn');

function advinharNum() {
    let numeros = Math.floor(Math.random() * 10) + 1;

    let respostaValue = numeros;
    numeroResposta.textContent = respostaValue;
    
    if(numeroEscolhido != numeroResposta){
        alert('Tente novamente')
    } else {
        alert('Numero correto!')
    }
    
}

btn.addEventListener('click', () => {
    try {
        advinharNum();
    } catch(error) {
        console.error(error);
    }
});



