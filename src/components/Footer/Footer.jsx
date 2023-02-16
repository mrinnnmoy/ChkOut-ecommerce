import React from 'react';
import './Footer.css';
import logo from '../../assets/images/eco-logo.png';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';


const Footer = () => {

  const year = new Date().getFullYear();
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4'>
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>ChkOut</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nam qui sequi dolor asperiores inventore harum fuga
              ratione obcaecati suscipit alias.
            </p>
          </Col>

          <Col lg='3'>
            <div className="footer__quick-links">
              <h4 className="quick__Links-title">Top Categories</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Mobile Phones</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Modern Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Arm chair</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='2'>
            <div className="footer__quick-links">
              <h4 className="quick__Links-title">Useful Links</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='3'>
            <div className="footer__quick-links">
              <h4 className="quick__Links-title">Contact</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <span><i className="ri-map-pin-line"></i></span>
                  <p>46 Graham Road, Kol-40.</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <span><i className="ri-phone-line"></i></span>
                  <p>+91-1203456789</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <span><i className="ri-mail-line"></i></span>
                  <p>chkout.support@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='12'>
            <p className="footer__copyright">
              Copyright {year} &#169; developed by
              <a href='https://www.linkedin.com/in/mrinnnmoy/' target='_blank' rel='noreferrer' className='px-1'>
                Mrinmoy Porel.
              </a>
              All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
};

export default Footer;