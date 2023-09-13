const botao = document.querySelector('.buttonSection')
const chatbot = document.querySelector('.chatBot')
const exit = document.querySelector('.conteudo-x')

botao.addEventListener('click', () => {

    botao.classList.add('expande')

    botao.style.backgroundImage = 'none'
    botao.style.backgroundColor = 'transparent'
    botao.style.width = '500px'
    botao.style.borderRadius = '8px'
    botao.style.height = '500px'

    exit.style.display = 'flex'
    chatbot.classList.add('chatBotExpandido')
})


exit.addEventListener('click', () => {

    chatbot.classList.remove('chatBotExpandido')
    chatbot.classList.add('chatBotContraido')
    exit.style.display = 'none'

    botao.classList.remove('expande')
    botao.classList.add('contrai')

    botao.style.backgroundImage = `url('/img/bot.jpg')`
    botao.style.width = '200px'
    botao.style.borderRadius = '8px'
    botao.style.height = '200px'

    

})