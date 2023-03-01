import React from 'react';
import Helmet from '../../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./Login.css";

const Login = () => {
  return (
    <Helmet title="Login">
      <section>
        <Container>
          <Row>
            <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold mb-4'>Login</h3>

              <Form className='auth__form'>
                <FormGroup className='form__group'>
                  <input type="email" placeholder='Enter your Email' />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type="password" placeholder='Enter your Password' />
                </FormGroup>

                <button className="buy__btn auth__btn">Login</button>
                <p>Don't have an account?{" "}<Link to='/signup'>SignUp</Link></p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
};

export default Login;