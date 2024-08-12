
import React from 'react';
import HomeMainBanner from './HomeMainBanner'
import Authorized from './Authorized'
import GroupOfCompany from './GroupOfCompany';
import AboutMgHome from './AboutMgHome';
import HomePicture from './HomePicture';
import OurPartners from './OurPartners';
import MemberShip from './MemberShip';
import LatestArticles from './LatestArticles';

const Home = () => {
  return (
    <>
          <HomeMainBanner/>
          <GroupOfCompany/>
          <Authorized/>
          <AboutMgHome/>
          <HomePicture/>
          <OurPartners/>
          <MemberShip/>
          <LatestArticles/>
    </>
  );
};

export default Home;


