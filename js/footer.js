// Footer collapse
var $headingFooter = $('footer h3');
$(window).resize(function () {
    if ($(window).width() <= 768) {
        $headingFooter.attr("data-toggle", "collapse");
    } else {
        $headingFooter.removeAttr("data-toggle", "collapse");
    }
}).resize();
$headingFooter.on("click", function () {
    $(this).toggleClass('opened');
});