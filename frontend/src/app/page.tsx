// src/app/page.tsx
import HomepageHeader from './components/HomepageHeader';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import HowItWorks from './components/HowItWorks';
// import WhyChooseUs from '../components/WhyChooseUs';
// import JoinCommunity from '../components/JoinCommunity';
// import Footer from '../components/Footer';

const Home = () => (
  <>
    <HomepageHeader />
    <Hero />
    <AboutUs />
    <HowItWorks />
    {/* <WhyChooseUs />
    <JoinCommunity />
    <Footer /> */}
  </>
);

export default Home;
