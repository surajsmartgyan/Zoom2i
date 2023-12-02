import React from 'react'
import { Container, Row, Form, Col, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const ForgetPassword = () => {
  return (
    <>
     <Container fluid className='px-0'>
                <Row className='main_div px-0'>
                    <div className='col-sm-8'></div>
                    <div className='col-sm-4 bg-white py-5 px-5' style={{borderRight:'15px solid #f6f7f9'}}>
                        <div className='text-center mt-5'>
                            <img src='../../img/Square.png' alt='' height='100px' width='200px' />
                        </div>
                        <p className='text-center'>Reset Password</p>
                        <div>
                            <Form>
                                <Row className='mt-5'>
                                    <Col>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control placeholder="Enter Your Email" type='email' />
                                    </Col>
                                </Row>
                                <Row className='mt-4 '>
                                    <Col>
                                        <Button  className='Btn w-100'>Request</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                        <Row className='mt-5'>
                            <Col><Link to='/login'style={{textDecoration:'none'}}> <i class='bx bx-left-arrow-alt fs-3' style={{transform:'translateY(7px)'}}></i> Login Here </Link></Col>
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

export default ForgetPassword