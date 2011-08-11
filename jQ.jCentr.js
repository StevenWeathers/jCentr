(function($) {
    $.fn.jCentr = function(mode) {
        var selected = this.selector;

        return this.each(function() {
            var $this = $(this);
            var cssObject = {
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: '-' + $this.outerHeight() / 2 + 'px',
                marginLeft: '-' + $this.outerWidth() / 2 + 'px'
            };
            switch (mode) {
            case "horizontal":
                cssObject.top = 0;
                cssObject.marginTop ='auto';
                break;
            case "vertical":
                cssObject.left = 0;
                cssObject.marginLeft = 'auto';
                break;
            }
            $this.parent(":not(" + selected + ")").css({
                position: 'relative'
            }).end().css(cssObject);
        });
    };
}(jQuery));