export default function initAnimacaoScroll (){ //9° passo: colocar dentro de uma função
      const sections = document.querySelectorAll('[data-anime="scroll"]') // 1° passo: selecionar todas as seções qu epossuem o js-scroll
  
      if(sections.length) { //8° passo: para rodar apenas se existir o sections
          const windowMetade = window.innerHeight * 0.6 // 5° passo: // depois de feito o css, observar que a animação ocorria, porém ocorria apenas quando o título da section passava o topo, ou seja, até passar o topo, fica um vazio no meio da tela; daí a necessidade de corrigir, tomando como base o valor de 60% do tamanho da tela, para que o espaço vazio não ocorra mais; innerHigth dá o tamanho da tela
          function animaScroll (){  // 3° passo: função que irá animar o scroll
              sections.forEach((section) => {
                  const sectionTop = section.getBoundingClientRect().top // 4° passo tem que saber qual a distância de cada elemento (section) em relação ao topo
                  const isSectionVisible =  (sectionTop - windowMetade) <0 //6° passo: achar o valor de metade da tela = sectionTop - windowMetade; <0 porque dará um resultado true, portanto pode passar direto no if
                  if (isSectionVisible) {
                       section.classList.add('ativo') // feito isso, ajustar no css para executar o estilo (linha 276)
                   }
                   else 
                   section.classList.remove('ativo') // para a animação ocorrer apenas uma vez
              }) 
          
          }
          
          animaScroll() // 7° passo: para quando carregar o site já aparecer a primeira animação (comentar e ver a diferença)
          
          window.addEventListener('scroll', animaScroll) // 2° passo: para animar o scroll, utiliza o elemento window
      }
      
  }
      
