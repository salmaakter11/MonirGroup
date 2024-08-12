import React from 'react';
import OwlCarousel from 'react-owl-carousel';

const partnerItems = [
    { imgSrc: "assets/img/partners/monir groupall-logo/it-sheba.png", alt: "IT Sheba" },
    { imgSrc: "assets/img/partners/monir groupall-logo/muskan.png", alt: "Muskan" },
    { imgSrc: "assets/img/partners/monir groupall-logo/monir-group.png", alt: "Monir Group" },
    { imgSrc: "assets/img/partners/monir groupall-logo/monir-travel.png", alt: "Monir Travel" },
    { imgSrc: "assets/img/partners/monir groupall-logo/travel-sheba.png", alt: "Travel Sheba" },
    { imgSrc: "assets/img/partners/monir groupall-logo/new-vission.png", alt: "New Vission" }
];

const responsive = {
    0: { items: 2 },
    600: { items: 3 },
    1000: { items: 4 },
    1200: { items: 5 }
};

const OurPartners = () => {
    return (
        <section className='our-partner section-padding'>
            <div className='container'>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="section-title">
                            <h2>Our Partners</h2>
                            <p>The passages of Lorem Ipsum available but the major have suffered alteration embarrassed</p>
                        </div>
                    </div>
                </div>
                <OwlCarousel
                    items={5}
                    nav={false}
                    loop={true}
                    autoplay={true}
                    smartSpeed={1300}
                    className='brand-slider-two owl-carousel'
                    responsive={responsive} >
                    {partnerItems.map((item, index) => (
                        <div className="single-brand round-border" key={index}>
                            <img src={item.imgSrc} alt={item.alt} />
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </section>
    );
};

export default OurPartners;
