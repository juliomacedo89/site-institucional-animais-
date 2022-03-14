export default function initScrollSuave(){
      const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"')
  
      // 2° passo: acrescentar um evento de clique para cada item da const linksInternos, usando o forEach
      
      linksInternos.forEach((link) => {
          link.addEventListener('click', scrollToSection)
      })
      
      // 3° passo: criar a função scrollToSection, lembrando que essa função executara o scroll suave
      
      function scrollToSection (event){ 
          event.preventDefault(); // 4° passo: prever o comportamento dos links, ou seja, a partir daqui, ao clicar em cada link ele ja não pula mais para a seção que ele pertencia (comentar essa linha e ver como funcionanva antes da prevenção). Lembrando que o preventDefault() é uma função então tem que ter o '()'.
          const href = event.currentTarget.getAttribute('href') // 5° passo: pegar o id da href do link que eu cliquei; currentTarget = lê-se: no link que cliquei (porque currentTarget está associado ao elemento que dispara o evento, ou seja, nesse caso o link); getAttribute = Lê-se: pegue o atributo 'href' dele
          const section = document.querySelector(href) // 6° passo: colocar dentro da section o mesmo id da const href, para haver associação entre as duas constantes. Ou seja, aqui, a const section irá selecionar o id da const href
      
          section.scrollIntoView({ // 7° passo: criar a função que irá realizar o scroll (iremos criar um objeto para passar algumas propriedades)
              behavior: 'smooth', // behavior = comportamento; smooth é o estilo suave que realizará o scroll suave. Lembrando que propriedades de objeto se separam por vírgula
              block: 'start', // start define que o scroll iniciará o título da seção no ínicio da tela (comentar esse código e observar que sem ele o scroll inicia o título da seção no meio da tela )
          })
      }
      
  }
  
  