import React, { useState } from "react";
import { Container, Row, Form, Col, Button } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2'

const Singup = () => {

    const [fromData , setData]= useState({
        name:'',
        contact:'',
        dob:'',
        address:'',
        email:'',
        password:''
    })
    
    const Navigate=useNavigate();
    const handelchand = (e)=>{
        const {name , value } = e.target;
        setData({...fromData,[name]:value})
    };

    const handlSumbit = async (e)=>{
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/signup' , fromData);
            if (response && response.data) {
               console.log(response.data);
               Swal.fire({
                title: "Signup Successfull",
                text: "Welcome to the community",
                icon: "success"
              });
               
               Navigate('/login')
            }
        } catch (error) {
          console.error('Signup error:', error);
          Swal.fire({
              title: 'Login Failed',
              text: 'Please check your credentials and try again',
              icon: 'error',
          });
        }
        setData({
          email:'',
          password:''
        })
    }
  return (
    <>
      <Container fluid className="px-0">
        <Row className="main_div px-0">
          <div className="col-sm-8"></div>
          <div
            className="col-sm-4 bg-white py-5 px-5"
            style={{ borderRight: "15px solid #f6f7f9" }}
          >
            <div className="text-center">
              <img
                src="../../img/Square.png"
                alt=""
                height="100px"
                width="200px"
              />
            </div>
            <p className="text-center">Sign Up to your dashboard</p>
            <div>
              <Form onSubmit={handlSumbit}  >
                <Row>
                  <Col>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      placeholder="Enter Your Name"
                      type="text"
                      name="name"
                      onChange={handelchand}
                      value={fromData.name}
                    />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col>
                    <Form.Label>Contact</Form.Label>
                    <Form.Control
                      placeholder="Enter Your Contact"
                      type="text"
                      name="contact"
                      onChange={handelchand}
                      value={fromData.contact}
                    />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col>
                    <Form.Label>Date Of Birth</Form.Label>
                    <Form.Control
                      placeholder="Enter Your DOB"
                      type="date"
                      name="dob"
                      onChange={handelchand}
                      value={fromData.dob}
                    />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      placeholder="Enter Your Address"
                      type="text"
                      name="address"
                      onChange={handelchand}
                      value={fromData.address}
                    />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      placeholder="Enter Your Email"
                      type="email"
                      name="email"
                      onChange={handelchand}
                      value={fromData.email}
                    />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      placeholder="Enter Your Password"
                      type="password"
                      name="password"
                      onChange={handelchand}
                      value={fromData.password}
                    />
                  </Col>
                </Row>
                <Row className="mt-4 ">
                  <Col>
                    <Button type="submit" className="Btn w-100">Singup Now</Button>
                  </Col>
                </Row>
              </Form>
            </div>
            <Row className="mt-5">
              <Col>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  {" "}
                  <i
                    class="bx bx-left-arrow-alt fs-4"
                    style={{ transform: "translateY(6px)" }}
                  ></i>{" "}
                  Login Here{" "}
                </Link>
              </Col>
              <Col>
                <i class="bx bx-lock-open-alt"></i>
                <Link to="/forgetpassword" style={{ textDecoration: "none" }}>
                  {" "}
                  Forget Password ?
                </Link>
              </Col>
            </Row>
            <Row className="text-center mt-5 mb-5">
              <Col>
                <p>Copyright @ 2023 by 11 Square Solutions</p>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Singup;
