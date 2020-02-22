import React from "react";
import "./App.css";
import "./style/index.scss";
// import { Row, Col, List, Icon, BackTop } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./pages/Header";
import Index from "./pages/index";
import detailed from "./pages/detailed";
const App = () => {
  return (
    <Router>
      <div>
        <Header></Header>
        <div className="Main">
        <Route path="/" exact component={Index} />
        <Route path="/detailed"  component={detailed} />
        </div>
      </div>
    
    </Router>

  );
};
export default App;
