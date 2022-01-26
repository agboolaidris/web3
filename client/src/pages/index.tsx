import React from 'react';
import Layout from '../layout';
import Welcome from '../components/welcome';
import Send from '../components/send';

const Home = () => {
  return (
    <Layout>
      <Welcome />
      <Send />
    </Layout>
  );
};

export default Home;
