export default function initDropdownMenu(){


  //  INICIAR DROPDOWN MENU
  const dropdownMenus = document.querySelectorAll('[data-dropdown]') //para executar essa função caso existam mais dropdowns no site (e esses outros ocorram com mesmos efeitos)

  dropdownMenus.forEach(menuDropdown =>{

    ['touchstart', 'click'].forEach(eventUser =>{

      menuDropdown.addEventListener (eventUser, handleClick)

    })
  })
  

  function handleClick(event){
    event.preventDefault()
    
    this.classList.toggle('active')
    outsideClick() /* Essa função está disposta aqui por causa da FASE DE BUBBLE -> sempre
                      que um elemento for clicado (em qualquer lugar do HTML) a fase de 
                      bubble sempre selecionará o HTML no final*/
    
  }
}
  // FUNÇÃO PARA FECHAR  DROPDOWN MENU  quando clicar do lado de fora deste
  /* A lógica setá remover a classe ativo do dropdown menu quando houver clique em 
  qualquer lugar do HTML; porém fazer uma verificação, ou seja, se houver clique em 
  algum lugar do HTML e for o dropdown, então não remove a classe ativo, porém se o clique 
  no HTML for fora do dropdown, a classe ativo é removida
  Para mais info -> eventos de bubble */

  function outsideClick(){
    const html = document.documentElement
    html.addEventListener('click', handleOutsideClick)

    function handleOutsideClick(event){
      console.log('html')
    }
  }
























/*

Modo menos performático de aplicar os eventos 

  dropdownMenus.forEach(menuDropdown =>{

    menuDropdown.addEventListener('click', handleClick)
    menuDropdown.addEventListener('touchstart', handleClick)
    menuDropdown.addEventListener('mouseover', handleClick)
  })

  */