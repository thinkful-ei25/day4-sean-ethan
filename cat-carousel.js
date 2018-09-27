'use strict';

function onPictureClick(){
$('.thumbnails').on('click', 'img', function(event){
    //console.log(event.currentTarget);
    let newHero = $(event.currentTarget).attr('src');
    $('.hero').find('img').attr('src', newHero);
    let newHeroAlt = $(event.currentTarget).attr('alt');
    $('.hero').find('img').attr('alt', newHeroAlt);
  });
}

onPictureClick();