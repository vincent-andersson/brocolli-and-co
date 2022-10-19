import React from 'react';
import Header from '../components/Header';
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
        <article>
          I am an article!
        </article>
      </div>
      <Footer />
    </div>
  )
}

export default Home;