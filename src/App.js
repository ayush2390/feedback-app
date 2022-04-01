import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLinks from './components/AboutIconLinks';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  
  return (
    <FeedbackProvider>
    <Router>
      <Header /> 
    <div className="container">
     <Routes><Route exact path='/' element ={
       <>
      <FeedbackForm />
      <FeedbackStats  />
      <FeedbackList/>
      </>}>
      </Route> 
      <Route path='/about' element={<AboutPage />}/>
      </Routes>
      <AboutIconLinks />
    </div>
    </Router>
    </FeedbackProvider>
  );
}

export default App;
