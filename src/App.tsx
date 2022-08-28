import React from 'react';
import { ToastContainer, Zoom } from 'react-toastify';
import RecognitionProvider from './application/useRecognition';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from './components/pages/StartPage/StartPage';
import PowerStationPage from './components/pages/PowerStationPage/PowerStationPage';
import AllCommandsPage from './components/pages/AllCommandsPage/AllCommandsPage';
import { globalCommands } from './utils/globalCommands';
import { usePower } from './application/usePower';
import HistoryPage from './components/pages/HistoryPage/HistoryPage';
import { useNotes } from './store/notes';
import { stationCommands } from './utils/stationCommands';

const App = () => {
  const { toggleSecondCB, toggleSectionCB, toggleFirstCB } = usePower();

  const voiceDefineCommands = () =>
    stationCommands({ toggleFirstCB, toggleSecondCB, toggleSectionCB });
  const { setNote } = useNotes();

  return (
    <BrowserRouter>
      <RecognitionProvider
        commands={[...globalCommands(setNote), ...voiceDefineCommands()]}
      >
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/power" element={<PowerStationPage />} />
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
};

export default App;
