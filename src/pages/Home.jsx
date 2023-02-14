import React from 'react';
import '../styles/home.css';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png';

const Home = () => {

  const year = new Date().getFullYear()

  return <Helmet title={"Home"}>
    <section classname='hero__section'>
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
              <button className="buy__btn">Shop Now</button>
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
  </Helmet>

};

export default Home;