import React from 'react';
import './App.css';
import { Row,Col,Menu,Icon,Button } from 'antd';

const App=()=>(
    <div className="header">
      <Row type="flex" justify="center">
          <Col>
            <span className="header-logo">Secret</span>
            <span className="header-name">11</span>
          </Col>
          <Col>
            <Menu mode="horizontal">
              <Menu.Item key="home">
                <Icon type="home"></Icon>
              </Menu.Item>
            </Menu>
          </Col>
      </Row>
    </div>
  
)

export default App;
