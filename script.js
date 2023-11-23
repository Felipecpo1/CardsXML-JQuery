

let url = 'dados/dataset.xml'
$.ajax(url)
    .done(function(xml){
        $(xml).find('uchiha').each(function(){
            $('.swiper-wrapper').append(`<div class = 'swiper-slide'><div class='rosto'><img src='${$(this).find('foto').text()}' class='image-card'></div><div class='oculto'><p class='nome'> ${ $(this).find('nome').text()}</p> <p class='idade'> Idade: ${ $(this).find('idade').text()}</p><p class='olhos'> Olhos: ${ $(this).find('olhos').text()}</p><p class='jutsu'> Principais Jutsus: ${ $(this).find('jutsu').text()}</p><p class='status'> Status: ${ $(this).find('status').text()}</p></div></div`)

            let click = true;
            $('.swiper').on('click', 'img', function() {
              if (!click) {
                $('p').css('opacity', '0');
                click = true;
              } else {
                $('p').css('opacity', '1');
                click = false;
                $('span').css('display', 'none')
              }
            });
        })
    })
    .fail(function(){
        alert('Erro de leitura na XML')
    })  

    






