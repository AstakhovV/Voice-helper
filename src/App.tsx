import React from 'react';
import { ToastContainer, Zoom } from 'react-toastify';
import RecognitionProvider from './application/useRecognition';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartPage from './components/pages/StartPage/StartPage';

const App = () => (
  <BrowserRouter>
    <RecognitionProvider>
      <Routes>
        <Route path="/" element={<StartPage />} />
      </Routes>
      <ToastContainer transition={Zoom} autoClose={1500} />
    </RecognitionProvider>
  </BrowserRouter>
);

export default App;
