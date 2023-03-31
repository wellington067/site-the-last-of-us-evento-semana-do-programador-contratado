const botoescarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

 botoescarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
       desativarBotaoSelecionado();

       selecinarBotaoCarrossel(botao);

       esconderImagemAtiva();
        
       mostrarImagemDeFundo(indice);

    })
 })


 function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

function selecinarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}
