$(window).load(function() {
  $(document).on('click', '#js-admin-products-search', function() {
    var
      name = $('#js-search-product-name').val().toLowerCase(),
      id = $('#js-search-product-id').val();

    $('.js-product-item').each(function() {
      var $this = $(this),
        itemName = $this.data('name').toLowerCase(),
        itemId = $this.data('id'),
        show = false;

      if (name.length && id.length) {
        if (!!~itemName.indexOf(name) && id == itemId) { show = true; }
      } else if (name.length || id.length) {
        if (name.length && !!~itemName.indexOf(name)) { show = true; }
        if (id.length && id == itemId) { show = true; }
      } else {
        show = true;
      }

      $this.toggle(show);
    });

  });

  $(document).on('click', '#js-clear-product-search', function() {
    var
      name = $('#js-search-product-name'),
      id = $('#js-search-product-id');

    name.val('');
    id.val('');
    $('.js-product-item').show();
  });

  $(document).on('keyup change', '.js-editable-field-input', function() {
    var $this = $(this);
    $.ajax({
      url: $this.data('url'),
      data: {product: {cost: $this.val()}},
      type: 'PUT',
      success: function(data) {
      }
    })
  });

  var models = ['product_image', 'slide_background', 'brand_image', 'order_position', 'buyer', 'product_document', 'rubric_trait', 'product_trait', 'trait_value',
    'product_price', 'analogue_product', 'interesting_product', 'brand_certificate', 'employee_image', 'rubric_icon',
    'rubric_content_photo', 'rubric_content', 'building_product', 'building_photo', 'building_slide', 'event_icon', 'event_image',
    'just_buy_product', 'event_photo', 'solution_variant_product', 'product_purpose', 'schedule_item', 'rubric_banner_image', ];

  for(var i = 0; i < models.length; i++) {
    $('li[data-model="' + models[i] + '"]').remove();
    $('.' + models[i] + '_links').remove();
    $('.content .table .' + models[i] + 'link').remove();
  }

  $(document).on('click', '.js-delete-trait', function(e) {
    var link = $(this);
    e.preventDefault();
    $.ajax({
      url: link.attr('href'),
      type: 'DELETE',
      success: function() {
      },
      complete: function(d) {
        $.ajax({
          url: './product_traits',
          dataType: 'html',
          success: function(data) {
            $('#js-traits-edit-form').replaceWith($(data).find('#js-traits-edit-form'));
          }
        });
      }
    });
  });
  $(document).on('click', '.js-toggle-trait', function(e) {
    var link = $(this);
    e.preventDefault();
    $.ajax({
      url: link.attr('href'),
      type: 'POST',
      data: link.data(),
      success: function() {
      },
      complete: function(d) {
        $.ajax({
          url: './product_traits',
          dataType: 'html',
          success: function(data) {
            $('#js-traits-edit-form').replaceWith($(data).find('#js-traits-edit-form'));
          }
        });
      }
    });
  });
  //TODO хз че за косяк
  // $('#js-new-trait').remoteForm({
  //   success: function(data, status, xhr) {
  //     $.pjax.reload({container:"[data-pjax-container]"});
  //   }
  // });

  // var
  //   initAutocomplete = function() {
  //     $('#js-trait-input').autocomplete({
  //       source: function(request, response){
  //         $.ajax({
  //           type: 'GET',
  //           dataType: 'json',
  //           url : '/traits',
  //           data:{
  //             maxRows: 5,
  //             q: request.term
  //           },
  //           success: function(data){
  //             response(data.data);
  //           }
  //         });
  //       },
  //       delay: 100,
  //       minLength: 0,
  //       select: function(event, ui) {
  //         getTraitForm(ui);
  //
  //       }
  //     });
  //     $('#js-trait-input').focus(function() {
  //       $(this).autocomplete('search')
  //     });
  //   },
  //
  //   getTraitForm = function(obj) {
  //     var data = obj;
  //     data.id = $('#js-trait-input').data('productId');
  //
  //     $.ajax({
  //       url: '/traits/form',
  //       data: data,
  //       success: function(data) {
  //         $('#js-form-wrapper').html(data);
  //         $('#js-trait-input').val(obj.item.label);
  //       }
  //     });
  //   };



  // initAutocomplete();
  //
  // $(document).on('click', '#js-add-new-trait', function(e) {
  //   var form  = $(this).closest('form');
  //
  //   e.preventDefault();
  //
  //   $.ajax({
  //     url: form.attr('action'),
  //     type: 'post',
  //     data: form.serialize(),
  //     success: function(data) {
  //       $('#js-traits-edit-form').replaceWith($(data).find('#js-traits-edit-form'));
  //       initAutocomplete();
  //       initSort(successLogic);
  //     }
  //   });
  // });
  //
  // var
  //   updatePositions = function() {
  //     $('#traits-sorter .traits-edit-string').each(function(i){
  //       $(this).attr("data-position", i + 1);
  //     });
  //   },
  //
  //   initSort = function() {
  //     $('#traits-sorter').sortable({
  //       stop: function(e, ui) {
  //         updatePositions();
  //         var
  //           id = ui.item.data('id'),
  //           position = ui.item.data('position');
  //
  //         $.ajax({
  //           url: './product_traits',
  //           type: 'POST',
  //           data: {trait_id: id, position: position},
  //           success: successLogic
  //         })
  //       }
  //     });
  //   },
  //
  //   successLogic = function(data) {
  //     var list = $(data).find('#traits-sorter');
  //     $('#traits-sorter').replaceWith(list);
  //     initSort(successLogic);
  //   };
  //
  // $('#rails_admin_nestable_live_update').click();
  // $('.solution_variant_products_field .ra-multiselect-header').hide();
  // $('.solution_variant_products_field .ra-multiselect-column.ra-multiselect-left').hide();
  // $('.solution_variant_products_field .ra-multiselect-column.ra-multiselect-center').hide();
  // $('.solution_variant_products_field .ra-multiselect-column.ra-multiselect-right .ra-multiselect-item-remove-all').hide();
  // initSort(successLogic);
});