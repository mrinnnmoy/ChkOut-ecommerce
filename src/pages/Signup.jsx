import React, { useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import "../pages/Login/Login.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { setDoc, doc } from 'firebase/firestore';
import { auth } from "../firebase.config.js";
import { storage } from "../firebase.config.js";
import { db } from "../firebase.config.js";
import { toast } from "react-toastify";

const Signup = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      const user = await userCredential.user;

      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on((error) => {
        console.log(error.message)
      }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          // Update user profile
          await updateProfile(user, {
            displayName: username,
            photoURL: downloadURL,
          });

          // Store user data in firestore database
          await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            displayName: username,
            email,
            photoURL: downloadURL,
          })
        });
      });

      console.log(user)
    } catch (error) {
      toast.error('something went wrong');
    }
  }

  return (
    <Helmet title="SignUp">
      <section>
        <Container>
          <Row>
            <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold mb-4'>SignUp</h3>

              <Form className='auth__form' onSubmit={signup}>
                <FormGroup className='form__group'>
                  <input type="text" placeholder='Enter your Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type="email" placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type="password" placeholder='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </FormGroup>

                <FormGroup className='form__group'>
                  <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                </FormGroup>

                <button type='submit' className="buy__btn auth__btn">SignUp</button>
                <p>Already have an account?{" "}<Link to='/login'>LogIn</Link></p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
};

export default Signup;