import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = (props) => {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

    return (
      <>
        <Router>
          <LoadingBar
            color='#f11946'
            height="3px"
            progress={progress}
          />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="general" country="in" category="general"></News>} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="business" country="in" category="business"></News>} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="entertainment" country="in" category="entertainment"></News>} />
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="general" country="in" category="general"></News>} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="health" country="in" category="health"></News>} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="science" country="in" category="science"></News>} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="sports" country="in" category="sports"></News>} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="technology" country="in" category="technology"></News>} />
          </Routes>
        </Router>
      </>
    )
}

export default App;

