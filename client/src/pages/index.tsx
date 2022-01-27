import React from 'react';
import Layout from '../layout';
import Welcome from '../components/welcome';
import Send from '../components/send';
import Service from '../components/service';

const Home = () => {
  return (
    <Layout>
      <Welcome />
      <Send />
      <Service />
    </Layout>
  );
};

export default Home;
