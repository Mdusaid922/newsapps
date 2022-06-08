import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import {
  BrowserRouter,
  BrowserRouter as Route,Routes
} from "react-router-dom";
import Footer from "./components/Footer";

export default class App extends Component {
  pageSize=12;
  render() {
    return (
      <div style={{ backgroundColor: " #9E8015 " }}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element=              {<News key="general"        pageSize={this.pageSize} country="us" category="general" />} />
            <Route exact path="/business" element=      {<News key="business"       pageSize={this.pageSize} country="us" category="business" />} />
            <Route exact path="/Entertainment" element= {<News key="Entertainment"  pageSize={this.pageSize} country="us" category="Entertainment" />} />
            <Route exact path="/general" element=       {<News key="general"        pageSize={this.pageSize} country="us" category="general" />} />
            <Route exact path="/health" element=        {<News key="health"         pageSize={this.pageSize} country="us" category="health" />} />
            <Route exact path="/science" element=       {<News key="science"        pageSize={this.pageSize} country="us" category="science" />} />
            <Route exact path="/sports" element=        {<News key="sports"         pageSize={this.pageSize} country="us" category="sports" />} />
            <Route exact path="/technology" element=    {<News key="technology"     pageSize={this.pageSize} country="us" category="technology" />} />
          </Routes>
        </BrowserRouter>
        <Footer/>
      </div>
    );
  }
}

