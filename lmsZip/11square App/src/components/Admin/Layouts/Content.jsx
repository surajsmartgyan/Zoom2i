import React from 'react';
import { Col, Row } from "reactstrap";
import Cards from "../Content/Cards";
import Data1 from "../Content/Data1";
import Data2 from "../Content/Data2";

const Content = () => {
  return (
    <div>
      <Row className="mb-3"><h3>Dashboard</h3></Row>
      {/***Top Cards***/}
      <Row>
        <Col sm="3" >
          <Cards />
        </Col>
        <Col sm="3" >
          <Cards />
        </Col>
        <Col sm="3" >
          <Cards />
        </Col>
        <Col sm="3" >
          <Cards />
        </Col>
      </Row>
      {/***Sales & Feed***/}
      <Row>
        <Col sm="6" lg="6" xl="7" xxl="8">
          <Data1 />
        </Col>
        <Col sm="6" lg="6" xl="5" xxl="4">
          <Data2 />
        </Col>
      </Row>
    </div>
  );
}

export default Content