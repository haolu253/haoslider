$(document).ready(function(){
    var sync1 = $('#sync1');
    var sync2 = $('#sync2');

    // Sync nav
    sync1.on('click', '.owl-next', function () {
        sync2.trigger('next.owl.carousel');
    });
    sync1.on('click', '.owl-prev', function () {
        sync2.trigger('prev.owl.carousel');
    });

    // Start Carousel
    sync1.owlCarousel({
        loop: true,
        items: 1,
        lazyLoad: true,
        nav: true,
    });

    sync2.owlCarousel({
        loop: true,
        items: 1,
        nav: false,
    });

    sync1.on('changed.owl.carousel', function(event) {
        if (event.namespace && event.property.name === 'position') {
            sync2.trigger('to.owl.carousel', [event.relatedTarget.relative(event.property.value), 300, true]);
        }
    });
});
