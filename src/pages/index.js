import React from 'react';
import Header from '../components/Header';
import Article from '../components/Article';
import Footer from '../components/Footer';
import './index.css';

const Home = () => {
  return (
    <div className="home">
      <div>
        <Header />
        <Article />
      </div>
      <Footer />
    </div>
  )
}

export default Home;