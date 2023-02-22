import React from 'react';
import Helmet from './../../components/Helmet/Helmet';
import "./Cart.css";
import CommonSection from './../../components/UI/CommonSection/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import tdImg from "../../assets/images/arm-chair-01.jpg";

const Cart = () => {
  return (
    <Helmet title={"Cart"}>
      <CommonSection title="Shop" />
      <section>
        <Container>
          <Row>
            <Col lg='9'>
              <table className="table bordered">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src={tdImg} alt="" />
                    </td>
                    <td>Modern Arm chair</td>
                    <td>$299</td>
                    <td>2pcs</td>
                    <td><i className="ri-delete-bin-line"></i></td>
                  </tr>
                </tbody>
              </table>
            </Col>
            <Col lg='3'></Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
};

export default Cart;