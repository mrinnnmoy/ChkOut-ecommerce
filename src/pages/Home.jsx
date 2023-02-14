import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png';
import { motion } from 'framer-motion';

import Services from '../services/Services';

const Home = () => {

  const year = new Date().getFullYear()

  return (
    <Helmet title={"Home"}>
      <section className='hero__section'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero__content">
                <p className="hero__subtitle">
                  Trending product in {year}
                </p>
                <h2>Make Your Interior more Minimalist & Modern</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Pariatur et reiciendis labore molestiae mollitia
                  ab, repudiandae fuga consectetur minima. Accusamus.
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to='/shop'>
                    Shop Now
                  </Link>
                </motion.button>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />
    </Helmet>
  )
};

export default Home;