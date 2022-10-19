import React from 'react';
import Header from '../components/Header';
import Article from '../components/Article';
import Footer from '../components/Footer';

const Home = () => {
  const myStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  };

  return (
    <div style={myStyle}>
      <div>
        <Header />
        <Article />
      </div>
      <Footer />
    </div>
  )
}

export default Home;