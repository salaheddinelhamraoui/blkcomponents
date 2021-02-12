(function ($) {

    "use strict";



    // Input incrementer
    $(".numbers-row").append('<div class="inc button_inc">+</div><div class="dec button_inc">-</div>');
    $(".button_inc").on('click', function () {

        var $button = $(this);
        var oldValue = $button.parent().find("input").val();

        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });

    $(document).on(
        "click.bs.dropdown.data-api",
        ".dropdown.keep-inside-clicks-open",
        function (e) {
            e.stopPropagation();
        }
    );

})(window.jQuery); 