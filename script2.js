let url = 'dados/dataset.xml';
$.ajax(url)
  .done(function(xml) {
    $(xml).find('uchiha').each(function() {
      let slide = $('<div class="swiper-slide"></div>');
      let rosto = $('<div class="rosto"></div>');
      let img = $('<img class="image-card">').attr('src', $(this).find('foto').text());
      let icon = $('<i class="fa-solid fa-plus"></i>');
      let oculto = $('<div class="oculto"></div>');
      let nome = $('<p class="nome"></p>').text($(this).find('nome').text());
      let idade = $('<p class="idade"></p>').text('Idade: ' + $(this).find('idade').text());
      let olhos = $('<p class="olhos"></p>').text('Olhos: ' + $(this).find('olhos').text());
      let jutsu = $('<p class="jutsu"></p>').text('Principais Jutsus: ' + $(this).find('jutsu').text());
      let status = $('<p class="status"></p>').text('Status: ' + $(this).find('status').text());

      rosto.append(img);
      slide.append(rosto);
      slide.append(icon);
      oculto.append(nome);
      oculto.append(idade);
      oculto.append(olhos);
      oculto.append(jutsu);
      oculto.append(status);
      slide.append(oculto);

      $('.swiper-wrapper').append(slide);
    });

    $('.swiper-wrapper').on('click', '.fa-plus', function() {
      let icon = $(this);
      let oculto = icon.next('.oculto');

      oculto.slideToggle('slow', function() {
        this.toggleClass('fa-plus fa-minus');
      });
    });
  })
  .fail(function() {
    alert('Erro de leitura na XML');
  });