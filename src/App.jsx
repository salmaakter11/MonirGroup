import { Routes, Route } from "react-router-dom";
import Header from "./pages/header/Header";
import Home from "./pages/Home/Home"
import CompanyProfile from './pages//AboutUs/CompanyProfile'
import FounderLegacy from './pages/AboutUs/FounderLegacy'
import MissionVission from './pages/AboutUs/MissionVission'
import Management from './pages/AboutUs/Management'
import Footer from "./pages/Footer/Footer";
import LatestArticlesDetails from "./pages/Home/LatestArticlesDetails";
import TravelSheba from "./pages/BusinessUnits/TravelSheba/TravelSheba";
import ItSheba from "./pages/BusinessUnits/ItShebaLtd/ItSheba";
import HostingSheba from "./pages/BusinessUnits/HostingSheba/HostingSheba";
import Muskan from "./pages/BusinessUnits/MuskanHoliday/Muskan";
import MonirTravel from "./pages/BusinessUnits/MonirTravels/MonirTravel";
import CapitalNews from "./pages/BusinessUnits/CapitalNews/CapitalNews";
import FardinBranding from "./pages/BusinessUnits/FardinBranding/FardinBranding";
import EkotaMart from "./pages/BusinessUnits/EkotaMart/EkotaMart";
import NewVission from "./pages/BusinessUnits/NewVission/NewVission";
import AmanotTravels from "./pages/BusinessUnits/AmanotTravels/AmanotTravels"
import Umrah from "./pages/BusinessUnits/UmrahSheba/Umrah"
import FaijanRent from "./pages/BusinessUnits/FaijanRent/FaijanRent";
import Video from "./pages/Media/Video";

import Photos from "./pages/Media/Photos/Photos"
import PhotoDetails from "./pages/Media/Photos/PhotoDetails";

import Notice from "./pages/Media/Notice/Notice"

import Career from "./pages/Media/Career/Career"
import CareerDetails from "./pages/Media/Career/CareerDetails"

import Document from "./pages/Document/Document";
import DocumentDetails from "./pages/Document/DocumentDetails";

import Contact from "./pages/ContactUs/Contact";


function App() {

  return (
    <>
      <div className='app'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="CompanyProfile" element={<CompanyProfile />} />
          <Route path="founder-legacy" element={<FounderLegacy />} />
          <Route path="mission-vision" element={<MissionVission />} />
          <Route path="management" element={<Management />} />
          <Route path="LatestArticlesDetails" element={<LatestArticlesDetails />} />

          <Route path="travel-sheba" element={<TravelSheba />} />
          <Route path="it-sheba" element={<ItSheba />} />
          <Route path="hosting-sheba" element={<HostingSheba />} />
          <Route path="muskan-holidays" element={<Muskan/>} />
          <Route path="monir-travels" element={<MonirTravel />} />
          <Route path="capital-news" element={<CapitalNews />} />
          <Route path="fardin-branding" element={<FardinBranding />} />
          <Route path="ekota-mart" element={<EkotaMart/>} />
          <Route path="new-vision-consultancy" element={<NewVission/>} />
          <Route path="amanot-travels" element={<AmanotTravels/>} />
          <Route path="umrah-sheba" element={<Umrah/>} />
          <Route path="faijan-rent" element={<FaijanRent/>} />
         
          <Route path="video-gallery" element={<Video/>} />

          <Route path="photo-gallery" element={<Photos/>} />
          <Route path="photo-details" element={<PhotoDetails/>} />

          <Route path="notice-board" element={<Notice/>} />

          <Route path="career" element={<Career/>} />
          <Route path="career-details" element={<CareerDetails/>} />


          <Route path="document" element={<Document />} />
          <Route path="docunment-details" element={<DocumentDetails />} />
          
          <Route path="contact" element={<Contact />} />

        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App;
