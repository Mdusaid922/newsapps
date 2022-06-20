import "./App.css";

import React, {useState} from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import background from "./components/backgroundimage.jpg";

import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import Footer from "./components/Footer";
import LoadingBar from 'react-top-loading-bar'

const App=()=> {
 
  const pageSize = 12;
  const apiKey = process.env.REACT_APP_NEWS_API 
  const [progress,setProgress]= useState(0)
  
    return (
      <div className="" style={{ backgroundImage: `url(${background})`, backgroundAttachment: "fixed" }}>


        <Router>
          <NavBar />
          <LoadingBar
            hight={10}
            color='#cc0000'
            progress={progress}
      />
          <Routes>
            <Route exact path="/" element={<News setProgress={ setProgress} apiKey={ apiKey} key="general" pageSize={ pageSize} country="us" category="general" />} />
            <Route exact path="/business" element={<News setProgress={ setProgress} apiKey={ apiKey} key="business" pageSize={ pageSize} country="us" category="business" />} />
            <Route exact path="/Entertainment" element={<News setProgress={ setProgress} apiKey={ apiKey} key="Entertainment" pageSize={ pageSize} country="us" category="Entertainment" />} />
            <Route exact path="/general" element={<News setProgress={ setProgress} apiKey={ apiKey} key="general" pageSize={ pageSize} country="us" category="general" />} />
            <Route exact path="/health" element={<News setProgress={ setProgress} apiKey={ apiKey} key="health" pageSize={ pageSize} country="us" category="health" />} />
            <Route exact path="/science" element={<News setProgress={ setProgress} apiKey={ apiKey} key="science" pageSize={ pageSize} country="us" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={ setProgress} apiKey={ apiKey} key="sports" pageSize={ pageSize} country="us" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={ setProgress} apiKey={ apiKey} key="technology" pageSize={ pageSize} country="us" category="technology" />} />
          </Routes>
        </Router>
       
        <Footer />
      </div>
    );
 
}
export default App;
//ba7817bb863c491f8252ff5257e2ecc6
