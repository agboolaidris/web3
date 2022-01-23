import Head from 'next/head';
import Layout from '../layout';
import Welcome from '../components/welcome';
import Send from '../components/send';
const Home = () => (
  <Layout>
    <Welcome />
    <Send />
  </Layout>
);

export default Home;
