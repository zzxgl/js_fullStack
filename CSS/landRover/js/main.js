(function(){
    /**
     * navbar
     * <i class="material-icons">
              search -> close
            </i>
     */
    $('.ui.navbar .search-icon i')
    .click(function() {
      // console.log(this);
      const icon = $(this);
      icon
      .text('close')
      .parents('.content')
      .addClass('searching')
    })
    //
  })()
  