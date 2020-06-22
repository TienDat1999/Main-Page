import React, { useEffect } from "react";
import Navbar from "./component/Navbar";
import TableStudent from "./component/tableStudent"
import Sidebar from "./component/SideBar";
import { Row, Col } from "react-bootstrap";
export default function Main() {
  
  return (
    <div className="">
      <Navbar />
      <Row>
        <Col xs={2} id="sidebar-wrapper">
          <Sidebar />
        </Col>
        <Col xs={10} id="page-content-wrapper">
            <TableStudent/>
        </Col>
      </Row>

    </div>
  );
}

