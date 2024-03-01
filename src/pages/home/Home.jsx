import React from 'react'
import Description from '../main/Description'
import Footer from '../../modules/footer'
import { HomeWrapper } from "./home.style";
import Projects from '../main/Project';
import Skills from '../../modules/skills/skills';

const Home = () => {

  return (
    <>
      <HomeWrapper>
        <Description/>
        <Projects/>
      </HomeWrapper>
        <Skills/>
      <Footer />
    </>
  );
};

export default Home;
