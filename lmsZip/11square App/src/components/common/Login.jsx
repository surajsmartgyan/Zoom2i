import React, { useState } from 'react'
import { Container, Row, Form, Col, Button } from 'react-bootstrap';
import { Link ,useNavigate} from 'react-router-dom';
import axios from "axios";
import Swal from 'sweetalert2'

const Login = () => {

    const [formData, setFormdata] = useState({
        email: '',
        password: ''
    });
    const Navigate=useNavigate();

    const handleInput = (e) => {
        const {name,value} = e.target;
        setFormdata({...formData,[name]:value})
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:3001/login',formData );
            if (response && response.data) {
               console.log(response.data);
               Swal.fire({
                title: "Login Successfull",
                text: "Welcome to the community",
                icon: "success"
              });
               Navigate('/dashboard')
            }
        } catch (error) {
            console.error('Login error:', error);
            Swal.fire({
                title: 'Login Failed',
                text: 'Please check your credentials and try again',
                icon: 'error',
            });

        }
        setFormdata({
            email:'',password:''
        })

    }
    return (
        <>
            <Container fluid className='px-0'>
                <Row className='main_div px-0'>
                    <div className='col-sm-8'></div>
                    <div className='col-sm-4 bg-white py-5 px-5' style={{ borderRight: '15px solid #f6f7f9' }}>
                        <div className='text-center'>
                            <img src='../../img/Square.png' alt='' height='100px' width='200px' />
                        </div>
                        <p className='text-center'>Login to your dashboard</p>
                        <div>
                            <Form onSubmit={handleLogin}>
                                <Row>
                                    <Col>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control placeholder="Enter Your Email" type='email' name='email' onChange={handleInput} value={formData.email} />
                                    </Col>
                                </Row>
                                <Row className='mt-3'>
                                    <Col>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control placeholder="Enter Your Password" type='password' name='password' onChange={handleInput} value={formData.password} />
                                    </Col>
                                </Row>
                                <Row className='mt-4 '>
                                    <Col>
                                        <Button className='Btn w-100' type="submit">Login</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                        <Row className='mt-5'>
                            <Col><i class='bx bx-user-plus fs-5' style={{ transform: 'translateY(3px)' }}></i> <Link to='/signup' style={{ textDecoration: 'none' }}>Signup Now </Link></Col>
                            <Col><i class='bx bx-lock-open-alt'></i><Link to='/forgetpassword' style={{ textDecoration: 'none' }}> Forget Password ?</Link></Col>
                        </Row>
                        <Row className='text-center mt-5 mb-5'>
                            <Col>
                                <p>Copyright @ 2023 by 11 Square Solutions</p>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default Login