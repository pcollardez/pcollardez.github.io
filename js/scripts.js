jQuery(document).ready(function() {
      jQuery('#main-menu-mob').bind('change', function () {
        var url = jQuery(this).val();
        if (url) {
            window.location = url;
        }
        return false;
      });

      jQuery('#main-menu li')
        .on('mouseover', function() {
           jQuery(this).addClass('sfhover');
        })
        .on('mouseleave', function() {
           jQuery(this).removeClass('sfhover');
        });
});
