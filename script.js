let url = 'dados/dataset.xml'
$.ajax(url)
    .done(function(xml){
        $(xml).find('uchiha').each(function(){
            $('#cards').append(`<div class = 'card'><div class='rosto'><img src='${$(this).find('foto').text()}' class='image-card'></div><p class='nome'> Nome: ${ $(this).find('nome').text()}</p> <p class='idade'> Idade: ${ $(this).find('idade').text()}</p><p class='olhos'> Olhos: ${ $(this).find('olhos').text()}</p><p class='jutsu'> Principais Jutsus: ${ $(this).find('jutsu').text()}</p><p class='status'> Status: ${ $(this).find('status').text()}</p></div>`)
        })
    })
    .fail(function(){
        alert('Erro de leitura na XML')
    })  