import React from 'react';
import { ToastContainer, Zoom } from 'react-toastify';
import RecognitionProvider from './application/useRecognition';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartPage from './components/pages/StartPage/StartPage';
import PyrolysisPage from './components/pages/PyrolysisPage/PyrolysisPage';
import PolyethylenePage from './components/pages/PolyethylenePage/PolyethylenePage';
import PowerStationPage from './components/pages/PowerStationPage/PowerStationPage';
import AllCommandsPage from './components/pages/AllCommandsPage/AllCommandsPage';
import { globalCommands } from './utils/globalCommands';
import PowerStationProvider from './application/usePower';

const App = () => (
  <BrowserRouter>
    <RecognitionProvider commands={globalCommands}>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/pyrolysis" element={<PyrolysisPage />} />
        <Route path="/polyethylene" element={<PolyethylenePage />} />
        <Route
          path="/power"
          element={
            <PowerStationProvider>
              <PowerStationPage />
            </PowerStationProvider>
          }
        />
        <Route path="/commands" element={<AllCommandsPage />} />
      </Routes>
      <ToastContainer
        transition={Zoom}
        autoClose={1500}
        position="bottom-right"
      />
    </RecognitionProvider>
  </BrowserRouter>
);

export default App;
