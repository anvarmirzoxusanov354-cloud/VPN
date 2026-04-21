import React from 'react';
import Hero from '../../components/Main/Hero/Hero';
import Stats from '../../components/Main/Stats/Stats';
import Features from '../../components/Main/Features/Features'; 
import Pricing from '../../components/Main/Pricing/pricing';
import GlobalNetwork from '../../components/Main/GlobalNetwork/GlobalNetwork';
import Footer from '../../components/Footer/Footer';


const Home = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Stats />
      <Features /> 
      <Pricing/>
      <GlobalNetwork/>
      <Footer/>
    </main>
  );
};

export default Home;