import React from 'react';
import { Link } from "react-router-dom";
import { Navbar,Collapse, Nav,NavItem,NavbarBrand,DropdownToggle,DropdownMenu,DropdownItem,Dropdown,Button,} from "reactstrap";

import user1 from "../../../assets/images/users/user4.jpg";



function Header() {
    const [isOpen, setIsOpen] = React.useState(false);

    const [dropdownOpen, setDropdownOpen] = React.useState(false);
  
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const Handletoggle = () => {
      setIsOpen(!isOpen);
    };
    const showMobilemenu = () => {
      document.getElementById("sidebarArea").classList.toggle("showSidebar");
    };
  return (
    <Navbar color="white" light expand="md" className="fix-header">
    <div className="d-flex align-items-center">
      <div className="d-lg-block d-none me-5 pe-3">
             <img src="../img/Square3.png" title="" alt="" height="50px" width="200px"/>
      </div>
      <Button
        color="primary"
        className=" d-lg-none"
        onClick={() => showMobilemenu()}
      >
        <i className="bi bi-list"></i>
      </Button>
      <NavbarBrand href="/">
            <img src="../../img/Square3.png" title="" alt="" height="50px" width="200px" className="d-lg-none"/>
      </NavbarBrand>
    </div>
    <div className="hstack gap-2">
      <Button
        color="primary"
        size="sm"
        className="d-sm-block d-md-none"
        onClick={Handletoggle}
      >
        {isOpen ? (
          <i className="bi bi-x"></i>
        ) : (
          <i className="bi bi-three-dots-vertical"></i>
        )}
      </Button>
    </div>

    <Collapse navbar isOpen={isOpen}>
      <Nav className="me-auto" navbar>
        <NavItem>
          <Link to="/" className="nav-link text-dark">
          <i class="bi bi-arrow-clockwise"></i> Refresh
          </Link>
        </NavItem>          
      </Nav>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        Admin
        <DropdownToggle color="transparent">
          <img
            src={user1}
            alt="profile"
            className="rounded-circle"
            width="30"
          ></img>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Info</DropdownItem>
          <DropdownItem>My Account</DropdownItem>
          <DropdownItem>Edit Profile</DropdownItem>
          <DropdownItem>Logout</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Collapse>
  </Navbar>
  )
}

export default Header




















































































































































































































