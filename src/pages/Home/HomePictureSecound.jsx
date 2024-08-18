import React, { useEffect } from 'react';
import $ from 'jquery';
import 'magnific-popup';
import OwlCarousel from 'react-owl-carousel';

const galleryItems = [
    { imgSrc: "assets/img/monir-group/photo8.jpg", alt: "Gallery Item 8" },
    { imgSrc: "assets/img/monir-group/photo1.jpg", alt: "Gallery Item 1" },
    { imgSrc: "assets/img/monir-group/photo2.jpg", alt: "Gallery Item 2" },
    { imgSrc: "assets/img/monir-group/photo9.jpg", alt: "Gallery Item 9" },
    { imgSrc: "assets/img/monir-group/photo3.jpg", alt: "Gallery Item 3" },
    { imgSrc: "assets/img/monir-group/photo4.jpg", alt: "Gallery Item 4" },
    { imgSrc: "assets/img/monir-group/photo6.jpg", alt: "Gallery Item 6" },
    { imgSrc: "assets/img/monir-group/photo7.jpg", alt: "Gallery Item 7" }
];

const responsive = {
    0: { items: 2 },
    600: { items: 3 },
    1000: { items: 4 },
    1200: { items: 4 }
};

const HomePictureSecound = () => {
    useEffect(() => {
        $('.gellery-slider2').magnificPopup({
            delegate: 'a.viewproject',
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    }, []);

    return (
        <div className='container'>
            <OwlCarousel
                items={4}
                nav={true}
                loop={true}
                autoplay={true}
                smartSpeed={1300}
                className='gellery-slider2 owl-carousel'
                responsive={responsive}
            >
                {galleryItems.map((item, index) => (
                    <div className="single-gallery" key={index}>
                        <img src={item.imgSrc} width="100%" height="100%" alt={item.alt} />
                        <div className="provject-link">
                            <a href={item.imgSrc} className="viewproject"><i className="fa fa-plus" /></a>
                        </div>
                    </div>
                ))}
            </OwlCarousel>
        </div>
    );
};

export default HomePictureSecound;
