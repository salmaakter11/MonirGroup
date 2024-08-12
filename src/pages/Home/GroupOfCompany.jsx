import React from 'react';
import OwlCarousel from 'react-owl-carousel';

const companies = [
    { imgSrc: "assets/img/partners/monir groupall-logo/monir-group.png", name: "monir Group", link: "https://monirgroup.net/" },
    { imgSrc: "assets/img/partners/monir groupall-logo/travel-sheba.png", name: "Travel Sheba", link: "http://www.travelsheba.com/" },
    { imgSrc: "assets/img/partners/monir groupall-logo/it-sheba.png", name: "It Sheba Limited", link: "http://itsheba.com.bd/" },
    { imgSrc: "assets/img/partners/monir groupall-logo/monir-travel.png", name: "Monir Travel LLC", link: "https://www.facebook.com/MonirTravels/" },
    { imgSrc: "assets/img/partners/monir groupall-logo/capital-news.png", name: "Capital News", link: "https://www.capitalnews24.net/news/category/1" },
    { imgSrc: "assets/img/partners/monir groupall-logo/fardin.png", name: "Fardin Branding Zone", link: "https://frc.monirgroup.net/" },
    { imgSrc: "assets/img/partners/monir groupall-logo/ekota-mart.png", name: "Ekota Mart", link: "https://ekotamart.com/" },
    { imgSrc: "assets/img/partners/monir groupall-logo/new-vission.png", name: "New Vission Consultancy", link: "http://www.newvisionconsultancy.com/" },
    { imgSrc: "assets/img/partners/monir groupall-logo/hosting-sheba.png", name: "Hosting Sheba", link: "https://hostingsheba24.com/" },
    { imgSrc: "assets/img/partners/monir groupall-logo/amanot.png", name: "Amanot Travels", link: "https://www.facebook.com/amanot.travel/" },
    { imgSrc: "assets/img/partners/monir groupall-logo/muskan.png", name: "Muskan Holydays", link: "http://muskaanholidays.com/" },
    { imgSrc: "assets/img/partners/monir groupall-logo/umrah-sheba.png", name: "Umrah Sheba", link: "https://umrahsheba.com/" },
    { imgSrc: "assets/img/partners/monir groupall-logo/fardin.png", name: "Faijan Rent a car", link: "https://frc.monirgroup.net/" }
];

const responsive = {
    0: { items: 2 },
    600: { items: 4 },
    1000: { items: 5 },
    1200: { items: 5 }
};

const GroupOfCompany = () => {
    return (
        <section className="second-about-area section-space">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <div className='section-title pb-0'>
                            <h2>Group Of Company</h2>
                            <p>Choose your favorite service from Monir Group</p>
                        </div>
                    </div>
                </div>
                <OwlCarousel
                    items={5}
                    nav={false}
                    loop={true}
                    autoplay={true}
                    smartSpeed={700}
                    className='brand-slider owl-carousel'
                    responsive={responsive}
                >
                    {companies.map((company, index) => (
                        <div className="single-brand" key={index}>
                            <div className="text-center">
                                <div className="single-improvement">
                                    <img src={company.imgSrc} alt="client logo" className="img-fluid client-img" />
                                    <h4><a className="text-black" href={company.link} target="_blank" rel="noopener noreferrer">{company.name}</a></h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </section>
    );
};

export default GroupOfCompany;
