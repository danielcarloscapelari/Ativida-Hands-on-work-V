
const cabecalho = document.getElementById('cabecalho');


cabecalho.addEventListener('mouseover', function() {
    
    cabecalho.style.backgroundColor = '#FF8C00';
});


cabecalho.addEventListener('mouseout', function() {
    
    cabecalho.style.backgroundColor = '#FF8C00';
});

$(document).ready(function() {
    $('.dropdown-toggle').dropdown();
  });

// Função para adicionar classe 'pulse' às imagens
window.onload = function() {
    // Obtém todas as imagens dos produtos
    var productImages = document.querySelectorAll('.img-thumbnail');

    // Adiciona a classe 'pulse' a cada imagem
    productImages.forEach(function(image) {
        image.classList.add('pulse');
    });
};
