/*global jQuery */

/*
    jquery.labelhint.js
    https://github.com/bryanchow/jquery-labelhint
*/


(function($) {

    $.extend($.fn, {

        labelHint: function(options) {

            var defaults = {
                container: null,
                css: {
                    top: 5,
                    left: 5
                },
                className: 'hint'
            };
            options = $.extend({}, defaults, options);

            // Initialize elements
            function setup($label, $input, $container) {
                if (options.className) {
                    $label.addClass(options.className);
                }
                if (options.css) {
                    $label.css(options.css);
                }
                $label.css('position', 'absolute').click(function() {
                    $input.focus();
                });
                $container.css('position', 'relative');
            }

            // Show label hint
            function show($label, $input) {
                if ($input.val() === '') {
                    $label.css({
                        position: 'absolute',
                        textIndent: 0
                    });
                }
            }

            function hide($label, $input) {
                $label.css({
                    textIndent: -9999
                });
            }

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

                    // Initialize elements
                    setup($label, $input, $container);

                    // Show label on input blur
                    $input.blur(function() {
                        show($label, $input);
                    });

                    // Hide label on input focus
                    $input.focus(function() {
                        hide($label, $input);
                    });

                    // Set initial state
                    if ($input.val() === '') {
                        show($label, $input);
                    } else {
                        hide($label, $input);
                    }
                }

            });

        }

    });

}(jQuery));
