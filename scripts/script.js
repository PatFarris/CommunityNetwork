$(document).ready(function () {
    // HERO FADE IN
    $('.hero-content').fadeIn(2000);

    //ANIMATIONS
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(entry.target).addClass("reveal");
                observer.unobserve(entry.target); // Fade in once
            }
        });
    }, { threshold: 0.25 });

    // Observe each section except .hero
    $("section").not(".hero").each(function () {
        observer.observe(this);
    });

    // ACCORDION
    $("#accordion").accordion({
        collapsible: true,
        active: false,
        heightStyle: "content"
    });
});