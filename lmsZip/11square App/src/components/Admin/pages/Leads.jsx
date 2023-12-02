import React,{useState} from 'react';
import { Button, Col, Pagination, Row, Table,Form,Modal } from 'react-bootstrap';

const Leads = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
    <Row className="mb-5">
      <Col>
        <h3>Leads</h3>
      </Col>
      <Col>
          <Form.Select aria-label="Default select example">
            <option>Select Leads Type</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
      <Col className='text-end'>
        <input type='seach' className='searchinput' placeholder='Search Leads' />
      </Col>
    </Row>
    <Row className='mb-4'>
      <Col className='text-end'>
        <Button onClick={handleShow}>Add Leads</Button>
      </Col>
    </Row>
    <Row>
      <Col>
        <Table border-bottom className='text-center'>
          <thead>
            <tr>
              <th>Lead Name </th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Remark</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>FB Ads</td>
              <td>01/01/2023</td>
              <td>01/12/2023</td>
              <td>Website Development</td>
              <td>
                <Button className='btn-danger shadow-sm' ><i class="bi bi-trash"></i></Button>
              </td>
            </tr>
            <tr>
              <td>Google Ads</td>
              <td>01/01/2023</td>
              <td>01/12/2023</td>
              <td>Application Development</td>
              <td>
              <Button className='btn-danger shadow-sm' ><i class="bi bi-trash"></i></Button>
              </td>
            </tr>
            <tr>
              <td>Instagram Ads</td>
              <td>01/01/2023</td>
              <td>01/12/2023</td>
              <td>Company Promotion</td>
              <td>
              <Button className='btn-danger shadow-sm' ><i class="bi bi-trash"></i></Button>
              </td>
            </tr>
            <tr>
              <td>Linkedin Ads</td>
              <td>01/01/2023</td>
              <td>01/12/2023</td>
              <td>Company Promotion</td>
              <td>
                <Button className='btn-danger shadow-sm' ><i class="bi bi-trash"></i></Button>
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

export default Leads