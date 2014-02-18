(function( $ ){

  $.fn.fitText = function( kompressor ) {

      return this.each(function(){
        var $this = $(this);                                     // store the object
        var origFontSize = parseFloat($this.css('font-size'));   // init the font sizes
        var compressor = kompressor || 1;                        // set the compressor

        // Resizer() resizes items based on the object width divided by the compressor * 10
        var resizer = function () {
          $this.css('font-size', Math.min($this.width() / (compressor*10), origFontSize));
        };

        // Call once to set.
        resizer();

        // Call on resize. Opera debounces their resize by default.
        $(window).resize(resizer);

      });

  };

})( jQuery );
