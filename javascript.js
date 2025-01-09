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
    // Verifica se teve rolagem
    if (document.documentElement.scrollTop > 50) {
        // Se for maior que 50px, exibe o botão
        scrollToTopButton.style.display = "block"; 
    } else {
        // Se for menor que 50px, esconde o botão
        scrollToTopButton.style.display = "none"; 
    }
};

// Função ao evento de clique no botão 
scrollToTopButton.onclick = function() {
    // Quando o botão é clicado, faz a rolagem da página até o topo de forma suave
    window.scrollTo({ 
        top: 0,           
        behavior: 'smooth'
    }); 
};

