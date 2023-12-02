import React,{useState} from 'react';
import { Button, Col, Form, Pagination, Row, Table,Modal } from 'react-bootstrap';
import Swal from 'sweetalert2'

import user1 from "../../../assets/images/users/user4.jpg";

const User = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Delete btn sweet alert
  const deletebtn=()=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "Are You Delete This user.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleted',
          text: 'User Deleted Successfully',
          icon: 'success',
          confirmButtonColor: '#3085d6',
          
      })
      }
    })
  }
  // Edit Btn Sweet Alert 

  const EditBtn = () => {
    let user = {}; // Create an object to store user details.
  
    Swal.fire({
      title: 'Edit User Details',
      html:
        '<label for="input1">Name:</label><input id="input1" class="swal2-input">' +
        '<label for="input2">Email:</label><input id="input2" class="swal2-input">' +
        '<label for="input3">DOB:</label><input id="input3" class="swal2-input"><br/>'+
        '<label for="input3">Type:</label><input id="input4" class="swal2-input">',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      preConfirm: () => {
        user.name = document.getElementById('input1').value;
        user.email = document.getElementById('input2').value;
        user.dob = document.getElementById('input3').value;
        user.type = document.getElementById('input4').value;
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Edited',
          text: 'User Edited Successfully',
          icon: 'success',
          confirmButtonColor: '#3085d6',
        });
      }
    });
  };
  
  return (
    <div>
      <Row className="mb-5">
        <Col>
          <h3>User</h3>
        </Col>
        <Col>
          <Form.Select aria-label="Default select example"className='shadow-sm' >
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>

        </Col>
        <Col className='text-end sm-4'>
          <input type='seach' className='searchinput shadow-sm' placeholder='Search User' />
        </Col>
      </Row>
      <Row className='mb-4'>
        <Col className='text-end'>
          <Button className='shadow-sm' onClick={handleShow}>Add User</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table border-bottom className='text-center shadow-sm '>
            <thead>
              <tr>
                <th>Profile </th>
                <th>Name</th>
                <th>DOB</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    src={user1}
                    alt="profile"
                    className="rounded-circle"
                    width="40"
                  ></img>
                </td>
                <td>Suraj Singh</td>
                <td>01/01/2002</td>
                <td>Intern</td>
                <td >
                  <Button className='btn-primary shadow-sm' onClick={EditBtn}><i class="bi bi-pencil"></i></Button>&nbsp;&nbsp;<Button className='btn-danger shadow-sm' onClick={deletebtn} ><i class="bi bi-trash"></i></Button>
                </td>
              </tr>
              <tr>
              <td>
                  <img
                    src={user1}
                    alt="profile"
                    className="rounded-circle"
                    width="40"
                  ></img>
                </td>
                <td>Saurabh Singh</td>
                <td>01/01/2001</td>
                <td>Intern</td>
                <td >
                  <Button className='btn-primary shadow-sm'><i class="bi bi-pencil"></i></Button>&nbsp;&nbsp;<Button className='btn-danger shadow-sm'onClick={deletebtn} ><i class="bi bi-trash"></i></Button>
                </td>
              </tr>
              <tr>
              <td>
                  <img
                    src={user1}
                    alt="profile"
                    className="rounded-circle"
                    width="40"
                  ></img>
                </td>
                <td>Ujjwal </td>
                <td>01/01/2001</td>
                <td>Intern</td>
                <td >
                  <Button className='btn-primary shadow-sm'><i class="bi bi-pencil"></i></Button>&nbsp;&nbsp;<Button className='btn-danger shadow-sm' onClick={deletebtn}><i class="bi bi-trash"></i></Button>
                </td>
              </tr>
              <tr>
              <td>
                  <img
                    src={user1}
                    alt="profile"
                    className="rounded-circle"
                    width="40"
                  ></img>
                </td>
                <td>Mithilesh</td>
                <td>01/01/2002</td>
                <td>Intern</td>
                <td >
                  <Button className='btn-primary shadow-sm'><i class="bi bi-pencil"></i></Button>&nbsp;&nbsp;<Button className='btn-danger shadow-sm' onClick={deletebtn}><i class="bi bi-trash"></i></Button>
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

export default User