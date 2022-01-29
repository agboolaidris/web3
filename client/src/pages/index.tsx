import React from 'react';
import Layout from '../layout';
import Welcome from '../components/welcome';
import Send from '../components/send';
import Service from '../components/service';
import Footer from '../components/footer';

const Home = () => {
  return (
    <Layout>
      <Welcome />
      <Send />
      <Service />
      <Footer />
    </Layout>
  );
};

export default Home;
