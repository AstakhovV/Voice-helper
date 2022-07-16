import React from 'react';
import Layout from '../../templates/Layout';
import { StationControl } from '../../organisms/StationControl/StationControl';
import RecognitionProvider from '../../../application/useRecognition';
import { stationCommands } from '../../../utils/stationlCommands';
import { usePower } from '../../../application/usePower';

const PowerStationPage = () => {
  const { toggleSecondCB, toggleSectionCB, toggleFirstCB } = usePower();

  const voiceDefineCommands = () =>
    stationCommands({ toggleFirstCB, toggleSecondCB, toggleSectionCB });

  return (
    <Layout
      content={() => (
        <div className="flex p-4 flex-col gap-4 items-center">
          <p>Power station - "New Digital"</p>
          <RecognitionProvider commands={voiceDefineCommands()}>
            <StationControl />
          </RecognitionProvider>
        </div>
      )}
    />
  );
};

export default PowerStationPage;
