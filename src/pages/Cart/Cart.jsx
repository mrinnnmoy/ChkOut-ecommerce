import React from 'react';
import Helmet from './../../components/Helmet/Helmet';
import "./Cart.css";
import CommonSection from './../../components/UI/CommonSection/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import tdImg from "../../assets/images/arm-chair-01.jpg";
import { motion } from 'framer-motion';
import { cartActions } from './../../redux/slices/cartSlice';
import { useSelector } from 'react-redux';

const Cart = () => {

  const cartItems = useSelector(state => state.cart.cartItems)

  return (
    <Helmet title={"Cart"}>
      <CommonSection title="Shop" />
      <section>
        <Container>
          <Row>
            <Col lg='9'>
              {cartItems.length === 0 ? (<h2 className='fs-4 text-center'>No Item Added</h2>) : (
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
                    {cartItems.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <img src={item.imgUrl} alt="" />
                        </td>
                        <td>{item.productName}</td>
                        <td>${item.price}</td>
                        <td>{item.quantity}</td>
                        <td>
                          <motion.i whileTap={{ scale: 1.2 }} className="ri-delete-bin-line"></motion.i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg='3'></Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
};

export default Cart;