import React from "react";
import "../style/header.scss";
import { Row, Col, Menu, Icon } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import detailed from "../pages/detailed";
import any from "../pages/any";

const header = () => (
  <div className="header">
   <Router>
    <Row type="flex" justify="center">
      <Col xs={24} sm={24} md={10} lg={10}>
        <span className="header-logo">Secret</span>
      </Col>
      <Col>
        <Menu mode="horizontal">
          <Menu.Item key="home">
            <Link to="/">
              <Icon type="home"></Icon>
              <span>首页</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="video">
            <Link to="/detailed">
              <Icon type="youtube"></Icon>
              <span>详情页</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Col>
    </Row>

    </Router>
  </div>
);

export default header;
