import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import $ from 'jquery';
import 'magnific-popup';
import HomePictureSecound from './HomePictureSecound';

const galleryItems = [
    { imgSrc: "assets/img/monir-group/photo3.jpg", alt: "Gallery Item 3" },
    { imgSrc: "assets/img/monir-group/photo4.jpg", alt: "Gallery Item 4" },
    { imgSrc: "assets/img/monir-group/photo6.jpg", alt: "Gallery Item 6" },
    { imgSrc: "assets/img/monir-group/photo7.jpg", alt: "Gallery Item 7" },
    { imgSrc: "assets/img/monir-group/photo8.jpg", alt: "Gallery Item 8" },
    { imgSrc: "assets/img/monir-group/photo1.jpg", alt: "Gallery Item 1" },
    { imgSrc: "assets/img/monir-group/photo2.jpg", alt: "Gallery Item 2" },
    { imgSrc: "assets/img/monir-group/photo9.jpg", alt: "Gallery Item 9" }
];

const responsive = {
    0: { items: 2 },
    600: { items: 3 },
    1000: { items: 4 },
    1200: { items: 4 }
};

const HomePicture = () => {
    useEffect(() => {
        $('.gellery-slider').magnificPopup({
            delegate: 'a.viewproject',
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    }, []);

    return (
        <section className="gellery-area section-padding">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <div className='section-title pb-0'>
                            <h2>PICTURE GALLERY</h2>
                        </div>
                    </div>
                </div>
                <OwlCarousel
                    items={4}
                    nav={true}
                    loop={true}
                    autoplay={true}
                    smartSpeed={700}
                    className='gellery-slider owl-carousel'
                    responsive={responsive} >
                    {galleryItems.map((item, index) => (
                        <div className="single-gallery" key={index}>
                            <img src={item.imgSrc} width="100%" height="100%" alt={item.alt} />
                            <div className="provject-link">
                                <a href={item.imgSrc} className="viewproject"><i className="fa fa-plus"></i></a>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
                <HomePictureSecound />
            </div>
        </section>
    );
};

export default HomePicture;
