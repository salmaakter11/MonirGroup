import React, { useEffect, useRef } from 'react';
import 'magnific-popup';

const images = [
  { src: "assets/img/monir-group/photo4.jpg", href: "assets/img/monir-group/photo4.jpg" },

  { src: "https://images.unsplash.com/photo-1648737963540-306235c8170e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", href: "https://images.unsplash.com/photo-1648737963540-306235c8170e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },

  { src: "https://images.unsplash.com/photo-1648737966282-b193f74a1503?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60", href: "https://images.unsplash.com/photo-1648737966282-b193f74a1503?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" },

  { src: "https://th.bing.com/th/id/R.5744f934da134e9a275474a797572c46?rik=NAsYTv8Hu2%2bTYg&pid=ImgRaw&r=0", href: "https://th.bing.com/th/id/R.5744f934da134e9a275474a797572c46?rik=NAsYTv8Hu2%2bTYg&pid=ImgRaw&r=0" },

  { src: "http://localhost:5173/assets/img/about/about-1.jpg", href: "http://localhost:5173/assets/img/about/about-1.jpg" },

  { src: "http://localhost:5173/assets/img/about/about-2.jpg", href: "http://localhost:5173/assets/img/about/about-2.jpg" },

  { src: "https://th.bing.com/th/id/OIP.7zVDwg4Kc_udu5xPTA90KgHaF9?w=992&h=798&rs=1&pid=ImgDetMain", href: "https://th.bing.com/th/id/OIP.7zVDwg4Kc_udu5xPTA90KgHaF9?w=992&h=798&rs=1&pid=ImgDetMain" },

  { src: "https://mgapi.monirgroup.net/storage/photogallery/169648174910.jpg", href: "https://mgapi.monirgroup.net/storage/photogallery/169648174910.jpg" },

  { src: "https://mgapi.monirgroup.net/storage/photogallery/16964817499.jpg", href: "https://mgapi.monirgroup.net/storage/photogallery/16964817499.jpg" },
  { src: "https://mgapi.monirgroup.net/storage/photogallery/169648174910.jpg", href: "https://mgapi.monirgroup.net/storage/photogallery/169648174910.jpg" },

  { src: "https://mgapi.monirgroup.net/storage/photogallery/16964817499.jpg", href: "https://mgapi.monirgroup.net/storage/photogallery/16964817499.jpg" },
  { src: "https://mgapi.monirgroup.net/storage/photogallery/169648174910.jpg", href: "https://mgapi.monirgroup.net/storage/photogallery/169648174910.jpg" },

  { src: "https://mgapi.monirgroup.net/storage/photogallery/16964817499.jpg", href: "https://mgapi.monirgroup.net/storage/photogallery/16964817499.jpg" },
  { src: "https://mgapi.monirgroup.net/storage/photogallery/169648174910.jpg", href: "https://mgapi.monirgroup.net/storage/photogallery/169648174910.jpg" },

  { src: "https://mgapi.monirgroup.net/storage/photogallery/16964817499.jpg", href: "https://mgapi.monirgroup.net/storage/photogallery/16964817499.jpg" },
];

const PhotoDetails = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    $(galleryRef.current).magnificPopup({
      delegate: 'a.viewproject',
      type: 'image',
      gallery: {
        enabled: true
      }
    });

    return () => {
      $(galleryRef.current).magnificPopup('destroy');
    };
  }, []);

  return (
    <>
      <div className="container mt-10" ref={galleryRef}>
        <div className="card_wrapper">
          {images.map((image, index) => (
            <div className="card" key={index}>
              <div className="photo-Details">
                <img src={image.src} alt="img" />
                <div className="provject-link">
                  <a href={image.href} className="viewproject"><i className="fa fa-plus" /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PhotoDetails;
