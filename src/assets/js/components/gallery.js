
  $( document ).ready(function() {
    console.log( "ready!" );
    $('[data-fancybox="gallery"]').fancybox({
        buttons : [ 
          'zoom',
          'fullScreen',
          'close'
        ],
      });
});