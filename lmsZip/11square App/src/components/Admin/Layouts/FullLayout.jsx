import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const FullLayout = () => {
  return (
    <main>
    {/********header**********/}
    <Header />
    <div className="pageWrapper d-lg-flex ">
      {/********Sidebar**********/}
      <aside className="sidebarArea shadow bg-dark" id="sidebarArea">
        <Sidebar />
      </aside>
      {/********Content Area**********/}
      <div className="contentArea bg-demo1">
        {/********Middle Content**********/}
        <Container className="p-4" fluid>
          <Outlet />
        </Container>
      </div>
    </div>
  </main>
  )
}

export default FullLayout