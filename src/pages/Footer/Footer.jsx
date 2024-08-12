import React, { useEffect } from 'react';

const Footer = () => {

    useEffect(() => {
        // Scroll to top button functionality
        const scrollToTopButton = document.querySelector('.scroll-to-target');

        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                scrollToTopButton.classList.add('open');
            } else {
                scrollToTopButton.classList.remove('open');
            }
        };

        const handleScrollToTop = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        window.addEventListener('scroll', handleScroll);
        scrollToTopButton.addEventListener('click', handleScrollToTop);

        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
            scrollToTopButton.removeEventListener('click', handleScrollToTop);
        };
    }, []);
    return (
        <>
            <footer className="footer-area  section-padding mt-6">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="footer-icon-info">
                                <a href="tel:+8801906-297808"> <img src="assets/img/monir-group/phone-icon.png" width={50} alt="" /></a>
                                <a href="https://www.facebook.com/MonirGroup2022/"><img src="assets/img/monir-group/messenger-icon.png" width={50} alt="" /></a>
                                <a href="https://wa.me/message/GQW6J5FIQHUZI1"><img src="assets/img/monir-group/whatapps-icon.png" width={50} alt="" /></a>
                                <img src="assets/img/monir-group/footer-contact.png" alt="" />
                                <span className="text-white footer-contact"> +8801906-297808 <br /></span>
                                <span className="text-white support-footer"> SUPPORT 24/7 </span>
                                <span className="text-white mail-footer"> info@monirgroup.net </span>
                            </div>
                        </div>
                        <div className="col-md-12 ">
                            <div className="justify-content-center  d-flex">
                                <h6 className="text-white footer-policy"><a >PRIVACY POLICY</a> </h6>
                                <h6 className="text-white footer-policy"><a >TERMS OF SERVICE</a></h6>
                                <h6 className="text-white footer-policy"><a >REFUND POLICY</a></h6>
                            </div>
                        </div>
                        <div className="col-md-12 ">
                            <div className="justify-content-center  d-flex">
                                <div className="single-brand">
                                    <img src="assets/img/partners/monir groupall-logo/authorised-01.png" alt="" />
                                </div>
                                <div className="single-brand">
                                    <img src="assets/img/partners/monir groupall-logo/authorised-02.png" alt="" />
                                </div>
                                <div className="single-brand">
                                    <img src="assets/img/partners/monir groupall-logo/authorised-04.png" alt="" />
                                </div>
                                <div className="single-brand">
                                    <img src="assets/img/partners/monir groupall-logo/authorised-05.png" alt="" />
                                </div>
                                <div className="single-brand">
                                    <img src="assets/img/partners/monir groupall-logo/authorised-06.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 text-center mt-lg-5">
                            <div >
                                <a href="https://www.facebook.com/MonirGroup2022/"><img src="assets/img/monir-group/icons8-facebook-144.png" width={65} alt="" /></a>
                                <a ><img src="assets/img/monir-group/icons8-twitter-144.png" width={65} alt="" /></a>
                                <a ><img src="assets/img/monir-group/icons8-linkedin-144.png" width={65} alt="" /></a>
                                <a > <img src="assets/img/monir-group/icons8-instagram-144.png" width={65} alt="" /></a>
                            </div>
                        </div>
                        <div className="col-md-12 justify-content-center mt-lg-3">
                            <img src="assets/img/monir-group/payment.png" alt="" />
                        </div>
                        <div className="col-md-12 text-center mt-lg-2">
                            <div className="section-title">
                                <p className="text-white">Mukto Bangla Shopping Complex, 4th Floor,Suite No(13-17) Mirpur-1,
                                    Dhaka-1216
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <button className="scroll-top scroll-to-target" data-target="body">
                <span className="ti-arrow-up"> <i className="fa fa-arrow-up" aria-hidden="true"></i></span>
            </button>
            <div className="copy-right-section ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="copyright-text">
                                <p><i className="fa fa-copyright" /> Copyrights 2024. All rights reserved by <a href="http://itsheba.com.bd/">IT Sheba Limited</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
