const botao = document.querySelector('.buttonSection');
const chatbot = document.querySelector('.chatBot');
const exit = document.querySelector('.conteudo-x');
const iframe = document.querySelector('#iframe')

let contador = true

botao.addEventListener('click', () => {

    if (contador === true) {
        
        iframe.classList.add('expandeChat')
        botao.classList.add('expande');
        chatbot.classList.add('chatBotExpandido');
        

        contador = false

        setTimeout(()=>{
            iframe.classList.remove('expandeChat')
            exit.style.display = 'flex';
        },1000)
    }

});

exit.addEventListener('click', () => {

    if (contador === false) {
        iframe.classList.add('contraiChat')

        exit.style.display = 'none';

        botao.classList.add('contrai');
        botao.classList.remove('expande');

        setTimeout(() => {
            chatbot.classList.remove('chatBotExpandido');
            chatbot.classList.add('chatBotContraido');
        }, 800)

        setTimeout(() => {
            botao.classList.remove('contrai')
            chatbot.classList.remove('chatBotContraido');
            iframe.classList.remove('contraiChat')
            contador = true
        }, 1200)

    }
});
