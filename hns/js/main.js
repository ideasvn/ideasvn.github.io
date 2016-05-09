(function ($) {
    $('#main-menu').affix({
        offset: {
            top: function () {
                return (this.top = $('.slideshow').outerHeight(true))
            }
        }
    });
})(jQuery);