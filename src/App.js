import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import background from "./components/backgroundimage.jpg";

import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import Footer from "./components/Footer";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
 
  pageSize = 12;
  apiKey = process.env.REACT_APP_NEWS_API 
  state={
    progress:10
  }
setProgress=(progress)=>{
  this.setState({progress:progress})
}
  render() {
    return (
      <div style={{ backgroundImage: `url(${background})`, backgroundAttachment: "fixed" }}>


        <Router>
          <NavBar />
          <LoadingBar
            hight={10}
            color='#cc0000'
            progress={this.state.progress}
      />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="us" category="general" />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="us" category="business" />} />
            <Route exact path="/Entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Entertainment" pageSize={this.pageSize} country="us" category="Entertainment" />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="us" category="general" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="us" category="health" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="us" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="us" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="us" category="technology" />} />
          </Routes>
        </Router>
       
        <Footer />
      </div>
    );
  }
}
//ba7817bb863c491f8252ff5257e2ecc6
