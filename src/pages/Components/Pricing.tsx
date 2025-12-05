
import Navbar from '../../pages/Components/Navbar';
import HeroSection from '../../pages/Components/HeroSection';
import Services from '../../pages/Components/Services';
import Portfilo from "../../pages/Components/Portfilo";
import ProcessSection from "../../pages/Components/ProcessSection";
import TestimonialSection from '../Components/TestimonialSection';
import ContactUs from '../Components/ContactUs';
import OfferService from "../Components/OfferService";
import LabPricing from '../Components/LabPricing';
import Footer from '../Components/Footer';
import HeroBanner from './Banner';

const Pricing = () => (
  <div style={{ minHeight: '100vh', background: '#140f1c' }}>
    <Navbar />
 <HeroBanner
title="Cyber Security"
subtitle="Your subtitle or description goes here"
ctaText="Sign up"
ctaHref="/signup"
image="https://cdn.prod.website-files.com/66446d71a3755a2d4e53fe14/668baff40b223db5311c7fda_network-connections.png"
height="h-96"
/>    <LabPricing />
    <Footer />
  </div>
);
export default Pricing;
