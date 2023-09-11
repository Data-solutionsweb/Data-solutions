import React from 'react';
import Layout from './../components/Layout/Layout';
import FEATURED from '../images/featured.JPEG';

import '../styles/HomeStyles.css';

const Home = () => {
  return (
    <Layout>
      <div className='home' style={{ backgroundImage: `url(${FEATURED})` }}>
        <div className='headerContainer'>
          <h1>Cyber Security Solutions Overview</h1>
          <p>Data-Solutions as your trusted cyber security partner</p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
