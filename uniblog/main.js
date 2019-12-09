$(document).ready(function () {
    $(document).scroll(function () {
        let navbar = $("nav");
        navbar.toggleClass("scrolled", $(this).scrollTop() > navbar.height());
    });
});