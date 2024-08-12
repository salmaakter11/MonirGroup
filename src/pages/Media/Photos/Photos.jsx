import React from 'react';

const photoData = [
    {
        src: "assets/img/monir-group/photo4.jpg",
        link: "/photo-details",
        title: "Ifter Program 2024",
        date: "22 April 2024"
    },
    {
        src: "assets/img/monir-group/photo6.jpg",
        link: "/photo-details",
        title: "Ifter Program 2024",
        date: "22 April 2024"
    },
    {
        src: "https://mgapi.monirgroup.net/storage/photogallery/16964817499.jpg",
        link: "/photo-details",
        title: "Ifter Program 2024",
        date: "22 April 2024"
    },
    {
        src: "https://mgapi.monirgroup.net/storage/photogallery/169648174910.jpg",
        link: "/photo-details",
        title: "Ifter Program 2024",
        date: "22 April 2024"
    }
];

const Photos = () => {
    return (
        <>
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2>Photo Gallery</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a>Media</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Photo Gallery</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <section className="gallery-page section-padding mb-5">
                <div className="container">
                    <div className="row justify-content-center">
                        {photoData.map((photo, index) => (
                            <div className="col-xl-3 col-md-4 col-sm-6 personal" key={index}>
                                <div className="photo-gallery">
                                    <img src={photo.src} height={240} alt="" />
                                    <div className="provject-link">
                                        <a href={photo.link} className="text-white">More</a>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <a href={photo.link}>
                                        <h2 className="photos-text">{photo.title} <br />{photo.date}</h2>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Photos;
