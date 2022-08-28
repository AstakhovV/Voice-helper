import React from 'react';
import Layout from '../../templates/Layout';
import { globalCommands } from '../../../utils/globalCommands';
import { stationCommands, testCallback } from '../../../utils/stationCommands';
import ListCommands from '../../atoms/ListCommands/ListCommands';

const AllCommandsPage = () => (
  <Layout
    content={() => (
      <div className="flex p-4 flex-col gap-4">
        <p>Global commands</p>
        <ListCommands commands={globalCommands()} />
        <p>Power Station commands</p>
        <ListCommands commands={stationCommands(testCallback)} />
      </div>
    )}
  />
);

export default AllCommandsPage;
