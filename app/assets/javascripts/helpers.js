// Обёртка для UI Dialog
// Передаются все опции что и для диалога
// $('.js-popup-content').dialogPopup({..});
// Возврщает $объект
$.fn.extend({
  dialogPopup: function(options) {
    var
      _defaultOptions = {
        modal: true,
        dialogClass: 'popup-custom',
        show: {
          effect: 'drop',
          direction: 'left',
          duration: 200
        },
        hide: {
          effect: 'drop',
          direction: 'right',
          duration: 200
        },
        draggable: false,
        resizable: false
      },
      changePopup = function() {
        $('.popup-custom').find('.ui-dialog-buttonpane .ui-button')
          .attr('class', 'button btn-blue')
          .off('hover mouseenter blur focus mousedown')
          .blur();
      };

    this.on('dialogopen', changePopup);

    try {
      this.dialog('destroy');
    } catch (e) {}

    return this.first().dialog($.extend(true, _defaultOptions, options));
  }
});

$.fn.serializeObject = function()
{
  var o = {};
  var a = this.serializeArray();
  $.each(a, function() {
    if (o[this.name] !== undefined) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }
      o[this.name].push(this.value || '');
    } else {
      o[this.name] = this.value || '';
    }
  });
  return o;
};

_noty = function(type, text) {
  noty({
    text        : text,
    type        : type,
    dismissQueue: true,
    timeout     : 5000,
    closeWith   : ['click'],
    layout      : 'topCenter',
    theme       : 'defaultTheme',
    maxVisible  : 10
  });
};

_priceFormat = function(num) {
  return num.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};
