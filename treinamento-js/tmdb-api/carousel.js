function adjustCarousel(idName) {
    new Glider(document.getElementById(idName), {
        slidesToScroll: 1,
        slidesToShow: 7,
        draggable: true,
        dots: '#resp-dots',
        duration: 0.25,
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        },
        responsive: [
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: '1.5',
                    slidesToScroll: 1,
                    itemWidth: 295
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: '2.5',
                    slidesToScroll: 1,
                    itemWidth: 295
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: '3.5',
                    slidesToScroll: 1,
                    itemWidth: 295
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: '4.5',
                    slidesToScroll: 1,
                    itemWidth: 295
                }
                
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: '6.3',
                    slidesToScroll: 1,
                    itemWidth: 295
                }
                
            }
        ]
    });
}