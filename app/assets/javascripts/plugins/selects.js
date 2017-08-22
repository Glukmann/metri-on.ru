;(function($) {
  var
    _options  = {},
    _defaults = {

    },

    _create = function($block) {
      $block.each(function() {
        var $this = $(this);

        $this.data({options: _options, placeholder: $this.text()});
        _addEvents.apply(this);
      });

      $(document).on('click', function(e) {
        var
          activeSelectSelector = '.js-pseudo-select-block.active';

        if(!$(e.target).closest(activeSelectSelector).length) {
          $(activeSelectSelector).removeClass('active');
        }
      });
    },

    _resetSelect = function() {
      var $this = $(this);
      $this.find('.js-placeholder').text($this.data('placeholder'));
      $this.prev().val('');
    },

    _fillSelects = function(source) {
      var
        $this = $(this),
        $selectList = $this.next();

      if (typeof source != 'object') {
        return false;
      }

      $selectList.html('');

      if ($.isArray(source)) {
        _listFromArray(source, $this, $selectList);
      } else if ($.isPlainObject(source)) {
        _listFromObject(source, $this, $selectList);
      } else {
        return false;
      }

      _addEvents.apply(this);
    },

    _listFromArray = function(source, $this, $selectList) {
      var
        $li = $('<li>').addClass('pseudo-select-list-item');

      $.each(source, function(index, item) {
        $selectList.append(
          $li
            .clone().text(item.title)
            .attr('data-id', item.id)
        );
      });
    },

    _listFromObject = function(source, $this, $selectList) {
      var
        $li = $('<li>').addClass('pseudo-select-list-item');

      $selectList.append($li.clone().addClass('reset').text('').attr('code', ''));
      for(var key in source) {
        var id = source[key];

        $selectList.append(
          $li
            .clone().text(key)
            .attr('data-id', id)
        );
      }
    },

    _addEvents = function() {
      var
        $this = $(this),
        $box = $this.parent(),
        $div = $box.find('div.js-pseudo-select-input'),
        $listItems = $box.find('.js-pseudo-select-list li'),
        isEmpty = !$listItems.length;

      $div.off('click');
      $listItems.off('click');

      $div.on('click', function() {
        $('.js-pseudo-select-block.active').not($box).removeClass('active');

        if (!$box.hasClass('active')) {
          !isEmpty && $box.addClass('active');
        } else {
          $box.removeClass('active');
        }
      });

      $listItems.on('click', function() {
        var
          $this = $(this),
          params = {
            id: $this.data('id'),
            title: $this.text()
          };

        _selectOption($box, params);
        $box.removeClass('active');
      });
    },

    _selectOption = function($selectBox, obj) {
      $selectBox.find('input[type="hidden"]').val(obj.id).trigger('change');
      $selectBox.find('.js-placeholder').removeClass('active').text(obj.title).trigger('change');
    },

  // Public Methods
    _methods = {
      // Plugin initialize
      init: function(options) {
        _options = {};

        $.extend(_options, _defaults, options);
        _create(this);
      },
      fillOptions: function() {
        _fillSelects.apply(this, arguments);
        return this;
      },
      resetSelect: function() {
        _resetSelect.apply(this);
        return this;
      },
      activateSelect: function(id) {
        var
          $box = $(this).parent(),
          $item = $box.find('[data-id=' + id + ']');
        _selectOption($box, {title: $item.text(), id: id});
        return this;
      }
    };

  $.fn.selects = function(method) {
    if (typeof method === 'object' || !method) {
      return _methods.init.apply(this, arguments);
    }

    if (_methods[method]) {
      return _methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    }
    $.error('Undefined method ' +  method + ' for plugin jQuery.selects');
  };
})(jQuery);