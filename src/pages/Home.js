import React from 'react';
import Top from '../components/Home/Top.js';
import MasterInTechnology from '../components/Home/MasterInTechnology.js';
import TeamMembers from '../components/Home/TeamMembers.js';
import Services2 from '../components/Home/Services2.js';
import SmoothScrolling from '../components/Home/SmoothScrolling.js';

const Home = () => {
  return (
    <div>
      <Top/>
      <Services2/>
      <MasterInTechnology/>
      <TeamMembers/>
      <SmoothScrolling/>
    </div>
  )
}

export default Home
