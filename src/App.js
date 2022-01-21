import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  pageSize = 15;
  render() {
    return (
      <>
        <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<News pageSize={this.pageSize} key="general" country="in" category="general"></News>} />
            <Route exact path="/business" element={<News pageSize={this.pageSize} key="business" country="in" category="business"></News>} />
            <Route exact path="/entertainment" element={<News pageSize={this.pageSize} key="entertainment" country="in" category="entertainment"></News>} />
            <Route exact path="/general" element={<News pageSize={this.pageSize} key="general" country="in" category="general"></News>} />
            <Route exact path="/health" element={<News pageSize={this.pageSize} key="health" country="in" category="health"></News>} />
            <Route exact path="/science" element={<News pageSize={this.pageSize} key="science" country="in" category="science"></News>} />
            <Route exact path="/sports" element={<News pageSize={this.pageSize} key="sports" country="in" category="sports"></News>} />
            <Route exact path="/technology" element={<News pageSize={this.pageSize} key="technology" country="in" category="technology"></News>} />
          </Routes>
        </Router>
      </>
    )
  }
}

