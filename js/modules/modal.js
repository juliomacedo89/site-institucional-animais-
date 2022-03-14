export default function initModal(){

      const botaoAbrir = document.querySelector('[data-modal="abrir"]')
      const botaoFechar = document.querySelector('[data-modal="fechar"]')
      const containerModal = document.querySelector('[data-modal="container"]')

      
      if( botaoAbrir && botaoFechar && containerModal){ // Essa etapa é importante, pois faz a verificação se os selotores (botaoAbrir, ...Fechar, ...Modal) existe. Pois caso não existir E NÂO TIVER UM CONDICIONAL (if) o JS da problema. Para ver isso (erro na pág), adicione '[data-modal="abrir"]' no querySelector da const botaoAbrir. A página não será carregda

            
            function toggleModal(event){
                  event.preventDefault() //previne que não saia da página
                  containerModal.classList.toggle('ativo')
            }
            
            // função criada para quando clicar fora da área do modal 
            function cliqueforaModal(event){
            
                  if(event.target === this || event.target === botaoFechar) //2º passo: se dermos console.log (this), veremos que o this, neste caso, é a section (data-modal ="container"). Então, se ao clicar em qualquer item que não seja a section, a função não será executada. Para ver melhor, comente o if e de um console.log(this)
                        toggleModal(event) // 1º passo:tem que passar o event, pq se não, não funciona -> porém ocorre que, ao clicar nos inputs, o modal também fecha 
            }


            botaoAbrir.addEventListener("click", toggleModal)
            
            containerModal.addEventListener("click", cliqueforaModal)
         
      }
}            

// ABAIXO, MODO MENOS OTIMIZADO DE CODAR, SEM USAR O TOGGLE

/* 

if( botaoAbrir && botaoFechar && containerModal){


            function abrirModal(event){
                  event.preventDefault() //previne que não saia da página
                  containerModal.classList.add('ativo')
            }


            function fecharModal(event){
                  event.preventDefault() //previne que não saia da página
                  containerModal.classList.remove('ativo')
            }


            // função criada para quando clicar fora da área do modal 
            function cliqueforaModal(event){
            
                  if(event.target === this) //2º passo: se dermos console.log (this), veremos que o this, neste caso, é a section (data-modal ="container"). Então, se ao clicar em qualquer item que não seja a section, a função não será executada. Para ver melhor, comente o if e de um console.log(this)
                        fecharModal(event) // 1º passo:tem que passar o event, pq se não, não funciona -> porém ocorre que, ao clicar nos inputs, o modal também fecha 
            }


            botaoAbrir.addEventListener("click", abrirModal)
            botaoFechar.addEventListener("click", fecharModal)
            containerModal.addEventListener("click", cliqueforaModal)
      }


*/