import React from 'react';
import OwlCarousel from 'react-owl-carousel';

const membershipItems = [
    { imgSrc: "assets/img/partners/monir groupall-logo/authorised-01.png", alt: "Authorized 01" },
    { imgSrc: "assets/img/partners/monir groupall-logo/authorised-02.png", alt: "Authorized 02" },
    { imgSrc: "assets/img/partners/monir groupall-logo/authorised-03.png", alt: "Authorized 03" },
    { imgSrc: "assets/img/partners/monir groupall-logo/authorised-04.png", alt: "Authorized 04" },
    { imgSrc: "assets/img/partners/monir groupall-logo/authorised-05.png", alt: "Authorized 05" },
    { imgSrc: "assets/img/partners/monir groupall-logo/authorised-06.png", alt: "Authorized 06" }
];

const responsive = {
    0: { items: 2 },
    600: { items: 3 },
    1000: { items: 4 },
    1200: { items: 5 }
};

const MemberShip = () => {
    return (
        <>
            <section className='membership section-padding'>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="section-title">
                                <h2>Certifications & Membership</h2>
                            </div>
                        </div>
                    </div>
                    <OwlCarousel
                        items={5}
                        nav={false}
                        loop={true}
                        autoplay={true}
                        smartSpeed={300}
                        className='membership-slider owl-carousel'
                        responsive={responsive}
                    >
                        {membershipItems.map((item, index) => (
                            <div className="single-brand" key={index}>
                                <img src={item.imgSrc} alt={item.alt} />
                            </div>
                        ))}
                    </OwlCarousel>
                </div>
            </section>
        </>
    );
}

export default MemberShip;
 