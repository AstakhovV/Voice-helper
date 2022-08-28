import React from 'react';
import Layout from '../../templates/Layout';
import { StationControl } from '../../organisms/StationControl/StationControl';

const PowerStationPage = () => (
  <Layout
    content={() => (
      <div className="flex p-4 flex-col gap-4 items-center">
        <p>Power station - "New Digital"</p>
        <StationControl />
      </div>
    )}
  />
);

export default PowerStationPage;
