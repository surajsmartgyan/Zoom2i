import React,{useState} from 'react';
import { Button, Col, Pagination, Row, Table,Modal } from 'react-bootstrap';

const Holiday = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
    <Row className="mb-5">
      <Col>
        <h3>Holiday</h3>
      </Col>
      <Col className='text-end'>
        <input type='seach' className='searchinput' placeholder='Search Holiday' />
      </Col>
    </Row>
    <Row className='mb-4'>
      <Col className='text-end'>
        <Button onClick={handleShow}>Add Holiday</Button>
      </Col>
    </Row>
    <Row>
      <Col>
        <Table border-bottom className='text-center'>
          <thead>
            <tr>
              <th>Name </th>
              <th>From Date</th>
              <th>To Date</th>
              <th>Remark</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Suraj Singh</td>
              <td>01/01/2023</td>
              <td>01/12/2023</td>
              <td>Mern Developer</td>
              <td>
                <Button className='btn-primary shadow-sm'><i class="bi bi-pencil"></i></Button>&nbsp;&nbsp;<Button className='btn-danger shadow-sm' ><i class="bi bi-trash"></i></Button>
              </td>
            </tr>
            <tr>
              <td>Amar Kumar</td>
              <td>01/01/2023</td>
              <td>01/12/2023</td>
              <td>Mern Developer</td>
              <td>
                <Button className='btn-primary shadow-sm'><i class="bi bi-pencil"></i></Button>&nbsp;&nbsp;<Button className='btn-danger shadow-sm' ><i class="bi bi-trash"></i></Button>
              </td>
            </tr>
            <tr>
              <td>Saurabh Singh</td>
              <td>01/01/2023</td>
              <td>01/12/2023</td>
              <td>Mern Developer</td>
              <td>
                <Button className='btn-primary shadow-sm'><i class="bi bi-pencil"></i></Button>&nbsp;&nbsp;<Button className='btn-danger shadow-sm' ><i class="bi bi-trash"></i></Button>
              </td>
            </tr>
            <tr>
              <td>Mithilesh</td>
              <td>01/01/2023</td>
              <td>01/12/2023</td>
              <td>Mern Developer</td>
              <td>
                <Button className='btn-primary shadow-sm'><i class="bi bi-pencil"></i></Button>&nbsp;&nbsp;<Button className='btn-danger shadow-sm' ><i class="bi bi-trash"></i></Button>
              </td>
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

export default Holiday