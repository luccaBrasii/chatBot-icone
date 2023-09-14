const botao = document.querySelector('.buttonSection');
const chatbot = document.querySelector('.chatBot');
const exit = document.querySelector('.conteudo-x');

let contador = true

botao.addEventListener('click', () => {
        
        if(contador === true){
            botao.classList.add('expande');
            exit.style.display = 'flex';
            chatbot.classList.add('chatBotExpandido');

            contador = false
        }
        
});

exit.addEventListener('click', () => {
        
    if(contador === false){
        chatbot.classList.remove('chatBotExpandido');
        chatbot.classList.add('chatBotContraido');
        exit.style.display = 'none';
    
        botao.classList.add('contrai');
        botao.classList.remove('expande');

        setTimeout(()=>{
            botao.classList.remove('contrai')
            chatbot.classList.remove('chatBotContraido');
            contador = true
        },1200)

    }
});
