/*global jQuery */

/*
    jquery.labelhint.js
    https://github.com/bryanchow/jquery-labelhint
*/


(function($) {

    $.extend($.fn, {

        labelHint: function(options) {

            var defaults = {
                css: {
                    top: 5,
                    left: 5
                },
                container: null
            };
            options = $.extend({}, defaults, options);

            return this.each(function() {

                var $label = $(this);
                var inputId = $label.attr('for');

                if (inputId) {

                    var $input = $('#' + inputId);

                    var $container;
                    if (options.container) {
                        $container = $(options.container);
                    } else {
                        $container = $label.parent();
                    }
                    $container.css('position', 'relative');

                    $label.css('position', 'absolute').click(function() {
                        $input.focus();
                    });

                    this.hide = function() {
                        $label.css({
                            textIndent: -9999
                        });
                    };

                    this.show = function() {
                        if ($input.val() === '') {
                            $label.css({
                                position: 'absolute',
                                textIndent: 0
                            });
                            if (options.css) {
                                $label.css(options.css);
                            }
                        }
                    };

                    $input.focus(this.hide);
                    $input.blur(this.show);

                    if ($input.val() === '') {
                        this.show();
                    } else {
                        this.hide();
                    }
                }

            });

        }

    });

}(jQuery));
