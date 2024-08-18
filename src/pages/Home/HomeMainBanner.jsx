import React from 'react';
import OwlCarousel from 'react-owl-carousel';


const slides = [
    {
        backgroundImage: 'url(assets/img/monir-group/banner2.png)',
        mainTitle: 'Travel Sheba Dot Com',
        subTitle: 'Travel Sheba is a B2B & B2C Online Ticketing Platform which aims to build a dynamic and service',
        buttonPrimary: {
            text: 'Visit Website',
            link: 'http://www.travelsheba.com/',
        },
        buttonSecondary: {
            text: 'Contact Us',
            link: '',
        },
        imgSrc: 'assets/img/monir-group/tour.png',
        imgAlt: 'tour-img',
    },
    {
        backgroundImage: 'url(assets/img/monir-group/banner1.jpg)',
        mainTitle: 'Faijan Rent A Car',
        subTitle: 'Faijan Rent A Car is one of the most popular car rent services in Bangladesh.',
        buttonPrimary: {
            text: 'Visit Website',
            link: 'https://frc.monirgroup.net/',
        },
        buttonSecondary: {
            text: 'Contact Us',
            link: '',
        },
        imgSrc: 'assets/img/monir-group/car-2.png',
        imgAlt: 'Car',
    },
    {
        backgroundImage: 'url(assets/img/monir-group/banner-it.jpg)',
        mainTitle: 'IT Sheba Limited',
        subTitle: 'We Will Design And Develop Website, Software',
        buttonPrimary: {
            text: 'Visit Website',
            link: 'http://itsheba.com.bd/',
        },
        buttonSecondary: {
            text: 'Contact Us',
            link: '',
        },
        imgSrc: 'assets/img/monir-group/web.png',
        imgAlt: 'img',
    },
    {
        backgroundImage: 'url(assets/img/monir-group/hosting-bannar.jpg)',
        mainTitle: 'HOSTING SHEBA',
        subTitle: 'We Provide best Domain Hosting Service',
        buttonPrimary: {
            text: 'Visit Website',
            link: 'https://hostingsheba24.com/',
        },
        buttonSecondary: {
            text: 'Contact Us',
            link: '',
        },
        imgSrc: 'assets/img/monir-group/hosting.png',
        imgAlt: 'img',
        imgClassName: 'img-fluid',
        imgStyle: { maxWidth: '84%' },
        animationIcons: [
            { src: 'assets/img/monir-group/animated-icon-1.png', alt: 'wp hosting', className: 'animation-icon-img animation-icon-1', style: { width: '43px' } },
            { src: 'assets/img/monir-group/animated-icon-2.png', alt: 'wp hosting', className: 'animation-icon-img animation-icon-2', style: { width: '43px' } },
            { src: 'assets/img/monir-group/animated-icon-3.png', alt: 'wp hosting', className: 'animation-icon-img animation-icon-3', style: { width: '43px' } },
            { src: 'assets/img/monir-group/animated-icon-4.png', alt: 'wp hosting', className: 'animation-icon-img animation-icon-4', style: { width: '43px' } },
        ],
    },
    {
        backgroundImage: 'url(assets/img/monir-group/banner5.webp)',
        mainTitle: 'MONIR TRAVELS LLC',
        subTitle: 'Worldwide Air Ticketing, Hotel Reservation, Visa Processing, Dubai',
        buttonPrimary: {
            text: 'Visit Website',
            link: 'https://www.facebook.com/MonirTravels/',
        },
        buttonSecondary: {
            text: 'Contact Us',
            link: '',
        },
        imgSrc: 'assets/img/monir-group/travel-llc.png',
        imgAlt: 'img',
    },
    {
        backgroundImage: 'url(assets/img/monir-group/newsbanner.jpg)',
        mainTitle: 'CAPITAL NEWS 24',
        subTitle: ' Media/news company.',
        buttonPrimary: {
            text: 'Visit Website',
            link: 'https://www.capitalnews24.net/news/category/1',
        },
        buttonSecondary: {
            text: 'Contact Us',
            link: '',
        },
        imgSrc: 'assets/img/monir-group/news.png',
        imgAlt: 'Car',
    },
    {
        backgroundImage: 'url(assets/img/monir-group/branding-banner.jpg)',
        mainTitle: 'FARDIN BRANDING ZONE',
        subTitle: ' All Kind Of Printing Solutions',
        buttonPrimary: {
            text: 'Visit Website',
            link: 'https://www.facebook.com/FardinBrandingZone/',
        },
        buttonSecondary: {
            text: 'Contact Us',
            link: '',
        },
        imgSrc: 'assets/img/monir-group/branding-zone.png',
        imgAlt: 'Car',
    },
    {
        backgroundImage: 'url(assets/img/monir-group/ekotabanner.jpg)',
        mainTitle: 'EKOTA MART',
        subTitle: ' Ekta Mart guarantees hand-picked 100% authentic products.',
        buttonPrimary: {
            text: 'Visit Website',
            link: 'https://ekotamart.com/',
        },
        buttonSecondary: {
            text: 'Contact Us',
            link: '',
        },
        imgSrc: 'assets/img/monir-group/ekota.png',
        imgAlt: 'Car',
    },
];

const Home = () => {
    return (
        <section className="main-slider-area pt-5">
            <OwlCarousel
                items={1}
                nav={true}
                loop={true}
                autoplay={true}
                smartSpeed={1000}
                className='active-main-slider owl-carousel' >
                {slides.map((slide, index) => (
                    <div key={index} className="main-slider-item" style={{ backgroundImage: slide.backgroundImage }}>
                        <div className="slider-one-content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                                        <div className="main-slider-welcome-text">
                                            <div className="slider-cell">
                                                <h2 className="main-title" data-animation-in="fadeInLeft" data-animation-out="animate-out fadeOutLeft">
                                                    {slide.mainTitle}
                                                </h2>
                                                <h2 className="sub-title" data-animation-in="fadeInRight" data-animation-out="animate-out fadeOutRight">
                                                    {slide.subTitle}
                                                </h2>
                                                <div className="welcome-button" data-animation-in="fadeInDown" data-animation-out="animate-out fadeOutDown">
                                                    <a href={slide.buttonPrimary.link} target="_blank" className="btn btn-default button-primary">{slide.buttonPrimary.text}</a>
                                                    <a href={slide.buttonSecondary.link} className="button-secondary btn btn-default">{slide.buttonSecondary.text}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                                        <div className="main-slider-welcome-text">
                                            <div className="slider-cell">
                                                <img src={slide.imgSrc} alt={slide.imgAlt} className={slide.imgClassName || 'flying-image'} style={slide.imgStyle || {}} />
                                                {slide.animationIcons && slide.animationIcons.map((icon, idx) => (
                                                    <img key={idx} src={icon.src} alt={icon.alt} className={icon.className} style={icon.style} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </OwlCarousel>
        </section>
    );
};

export default Home;
