app.modules.applicationModule = (function(self) {
  var
    _addEvents = function() {
      $doc
        .on('click', '.selector', function(e) {
          e.preventDefault();
        });

        $(".scroll").click(function(event){
          var $this = $(this),
            offset = $($(this).attr('href')).offset();

          if (!offset) { return false; }

          event.preventDefault();

          $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
          }, 1000);
        });
    },

    _init = function() {
      var pull 		= $('#pull');
      menu 		= $('nav ul');
      menuHeight	= menu.height();

      $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
      });

      $(window).resize(function(){
        var w = $(window).width();
        if(w > 320 && menu.is(':hidden')) {
          menu.removeAttr('style');
        }
      });

      $().UItoTop();
    };

  self.load = function() {
     _init();
     _addEvents();
  };
  return self;
}(app.modules.applicationModule || {}));
