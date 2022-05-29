(function ($) {
    $(document).ready(function () {

        //section-warning
        $(".section-warning").delay(4000).fadeTo( "slow", 1 );

        $(".btn--close-warning").click(function () {
            $(".section-warning").hide("slow");
            return false;
        });

        //Submenu
        $(".sub-menu").hide();
        $(".sub-menu-parent a").click(function () {
            $(this).parent(".sub-menu-parent").children("ul").slideToggle("200");
        });

        //Menu button on click event
        $('.mobile-nav-button').on('click', function () {
            // Toggles a class on the menu button to transform the burger menu into a cross
            $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)").toggleClass("mobile-nav-button__line--1");
            $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)").toggleClass("mobile-nav-button__line--2");
            $(".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)").toggleClass("mobile-nav-button__line--3");

            // Toggles a class that slides the menu into view on the screen
            $('.mobile-menu').toggleClass('mobile-menu--open');
            return false;
        });
    });
})(jQuery);