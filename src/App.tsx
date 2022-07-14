import React from 'react';
import Navbar from './components/atoms/Navbar';
import { ToastContainer, Zoom } from 'react-toastify';
import Recognition from './components/molecules/Recognition';
import RecognitionProvider from './application/useRecognition';

function App() {
  return (
    <RecognitionProvider>
      <div>
        Voice helper
        <Navbar />
        <Recognition />
        <ToastContainer transition={Zoom} autoClose={1500} />
      </div>
    </RecognitionProvider>
  );
}

export default App;
