// src/app/page.tsx
import LandingHeader from "./components/LandingHeader";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import JoinCommunity from "./components/JoinCommunity";
import Footer from "./components/Footer";

const App = () => (
  <>
    {/* <Header /> <-- <LandingHeader /> || <LoggedInHeader /> || No Header */}
    {/* <Main /> <-- All the below stuff as  <LandingMain /> || <Login /> || <Register /> || <LoggedIn />  */}
    <LandingHeader />
    <Hero />
    <AboutUs />
    <HowItWorks />
    <WhyChooseUs />
    <JoinCommunity />
    <Footer />
  </>
);

export default App;
