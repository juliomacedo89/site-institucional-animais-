export default function initTolltip(){

  const tooltips = document.querySelectorAll('[data-tooltip]')


  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver)
  })


  function onMouseOver(event) {
    
    const tooltipBox = criarTooltipBox(this)

    tooltipBox.style.top = event.pageY + "px"
    tooltipBox.style.left = event.pageX + "px"

    onMouseMove.tooltipBox = tooltipBox
    this.addEventListener('mousemove', onMouseMove)

    onMouseLeave.tooltipBox = tooltipBox
    onMouseLeave.element = this

    this.addEventListener('mouseleave', onMouseLeave)
  }


  const onMouseLeave = {

    handleEvent(){
      
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave) //remover o evento da lista de event listeners do console para otimiza o código, ou seja, esse evento fica registrado no console temporariamente
      this.element.removeEventListener('mousemove', onMouseMove)
    }
  }


  const onMouseMove={
    
    handleEvent(event){

      this.tooltipBox.style.top = event.pageY + 20 + "px"
      this.tooltipBox.style.left = event.pageX + 20 + "px"    
    }
  }


  function criarTooltipBox(element) {
    
    const tooltipBox = document.createElement('div')
    const text = element.getAttribute('aria-label')

    tooltipBox.classList.add('tooltip')
    tooltipBox.innerText = text 

    document.body.appendChild(tooltipBox) 


    return tooltipBox
  }



}


/* s

1º seleciona todos os elementos com data-tooltip
2º Da um forEach em cada um para que quando o mouseover aconter em cada um deles, dispare uma função
3º Cria a função que irá disparar ao mouseover
4º Dentro dessa função, cria outra função que irá criar uma div para comportar o texto do aria-label
              - createElement cria a div
5º cria uma const text que irá receber o texto contido no aria-label
6º adiciona uma classe para a div criada
7º adiciona o texto da div criada como sendo o mesmo texto da const que contem o aria~label
8º adiciona essa div criada no final do documento (final do body)


tolltip.style.top/left = como o tooltip está com position absolute, ele precisa aparecer justamente onde o mouse estiver
event.pageX/y = são as coordenadas do evento de mouse over
+ "px" = é colocado pois o número que retorna no event.page é inteiro, e a div absolute tem que sem posicionada em px
*/