import React,{useState} from 'react';
import { Button, Col, Pagination, Row, Table,Modal } from 'react-bootstrap';

const Lookup = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Row className="mb-5">
        <Col>
          <h3>Lookup</h3>
        </Col>
        <Col className='text-end'>
          <input type='seach' className='searchinput' placeholder='Search Lookups' />
        </Col>
      </Row>
      <Row className='mb-4'>
        <Col className='text-end'>
          <Button onClick={handleShow}>Add Lookup</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table border-bottom className='text-center'>
            <thead>
              <tr>
                <th>Lookup Type </th>
                <th>Sub Lookup Type</th>
                <th>Lookup Value</th>
                <th>Lookup Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>_LeaveType</td>
                <td>_LeaveType</td>
                <td>Replacement</td>
                <td>Replacement</td>
                <td ><Button className='btn-danger px-3'>...</Button></td>
              </tr>
              <tr>
                <td>_LeaveType</td>
                <td>_LeaveType</td>
                <td>Replacement</td>
                <td>Replacement</td>
                <td ><Button className='btn-parimary px-3'>...</Button></td>
              </tr>
              <tr>
                <td>_LeaveType</td>
                <td>_LeaveType</td>
                <td>Replacement</td>
                <td>Replacement</td>
                <td ><Button className='btn-danger px-3'>...</Button></td>
              </tr>
              <tr>
                <td>_LeaveType</td>
                <td>_LeaveType</td>
                <td>Replacement</td>
                <td>Replacement</td>
                <td ><Button className='btn-parimary px-3'>...</Button></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <Pagination>
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Next />
                  </Pagination>
                </td>
              </tr>
            </tbody>

          </Table>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Lookup