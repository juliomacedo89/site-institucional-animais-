export default function initAccordion(){

      const accordionList = document.querySelectorAll('[data-anime="accordion"] dt') //dt, porque queremos selecionar todas as perguntas

    
      const classAtivo = 'ativo' // ----- 5° passo: quando se usa muito uma string, o ideal é coloca-la dentro de uma contante, para facilitar na manutenção; então substitui toda string 'ativo' pela constante 'classAtivo' (durante a formação do código foi utilizada apenas a string 'ativo', depois de executado o 5 passo, substituiu toda string 'ativo' pela constante classAtivo)
      if(accordionList.length){ // -------- 4° passo
          accordionList[0].classList.add(classAtivo) // para que a pessoa entenda que o FAQ da pra abir os textos da pergunta
          accordionList[0].nextElementSibling.classList.add(classAtivo) // para que a pessoa entenda que o FAQ da pra abir os textos da pergunta
          
          function activeAccordion(){ // ----------2° passo 
              this.classList.toggle('ativo') // colocar 'ativo' para poder fazer estilo tbm 
              this.nextElementSibling.classList.toggle('ativo')  //aqui o this se refere ao 'item' do forEach // next = adiciona "ativo" ao PRÓXIMO elemento (irmão) // toglle usamos para quando clicar conferir 'ativo' e quando clicar de novo o 'ativo' some
          };
          
          accordionList.forEach((item)=>{  // -------- 1°passo, adicionar um evento de clique em cada pergunta do FAQ, para chamar uma funcão de mostrar a resposta
              item.addEventListener('click', activeAccordion)
          })
          
          
          // ver o CSS para entender os estilos colocados depois de executadas as funções acima (linha 242)  --------- 3° passo
          
      }
      }
      
  
