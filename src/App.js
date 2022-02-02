import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize = 15;
  apiKey = process.env.REACT_APP_NEWS_API
  constructor(props) {
    super(props);
    this.state = {
      progress: 0
    }
  }
  setProgress= (progress) => {
    this.setState({
      progress: progress
    })
  }
  render() {
    return (
      <>
        <Router>
        <LoadingBar
            color='#f11946'
            height="3px"
            progress={this.state.progress}
          />
        <Navbar />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="general" country="in" category="general"></News>} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="business" country="in" category="business"></News>} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="entertainment" country="in" category="entertainment"></News>} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="general" country="in" category="general"></News>} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="health" country="in" category="health"></News>} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="science" country="in" category="science"></News>} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="sports" country="in" category="sports"></News>} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="technology" country="in" category="technology"></News>} />
          </Routes>
        </Router>
      </>
    )
  }
}

