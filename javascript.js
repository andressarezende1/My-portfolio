// Do Swiper (Carrosel)
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    });


  // Do botão de rolar para o topo 
const scrollToTopButton = document.getElementById('scrollToTopButton');

// Função ao evento de rolagem da janela
window.onscroll = function() {
    if (document.documentElement.scrollTop > 50) {
        scrollToTopButton.style.display = "block"; 
    } else {
        scrollToTopButton.style.display = "none"; 
    }
};

// Função ao evento de clique no botão 
scrollToTopButton.onclick = function() {
    window.scrollTo({ 
        top: 0,           
        behavior: 'smooth'
    }); 
};


// Seleciona todos os elementos com data-anime="top"
const targets = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';  // Nome da classe para animação

// Função para verificar se o elemento está visível na tela
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();  // Obtém as coordenadas do elemento em relação à tela
    return (
        rect.top < window.innerHeight && rect.bottom >= 0  // Verifica se o elemento está dentro da tela
    );
}

// Para cada elemento 'target', verifica se ele está visível e aplica a animação
function animeScroll() {
    targets.forEach(function(target) {
        if (isElementInViewport(target)) {
            target.classList.add(animationClass);  // Adiciona a classe de animação
        } else {
            target.classList.remove(animationClass);  // Remove a classe de animação
        }
    });
}

// Chama a função animeScroll assim que a página carregar
animeScroll();

// Adiciona um event listener para chamar animeScroll ao rolar a página
if (targets.length) {
    window.addEventListener('scroll', function() {
        animeScroll();
    });
}
