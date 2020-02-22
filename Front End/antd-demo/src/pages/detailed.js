import React from "react";

import { Row, Col ,Breadcrumb ,Icon } from "antd";
import Header from "./Header";
import Author from "./Author";
import Footer from "./Footer";
import "../style/detaied.scss"

const detailed = () => {
  return (

    <div>    
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
            <div>
              <div className="bread-div">
                <Breadcrumb>
                  <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                  <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                  <Breadcrumb.Item>xxxx</Breadcrumb.Item>
                </Breadcrumb>
              </div>

             <div>
                <div className="detailed-title">
                React实战视频教程-技术胖Blog开发(更新08集)
                </div>

                <div className="list-icon center">
                  <span><Icon type="calendar" /> 2019-06-28</span>
                  <span><Icon type="folder" /> 视频教程</span>
                  <span><Icon type="fire" /> 5498人</span>
                </div>

                <div className="detailed-content" >
                  详细内容，下节课编写
                </div>

             </div>

            </div>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author></Author>
        </Col>
      </Row>
      <Footer/>

    </div>
  );
};

export default detailed;
