import React from 'react';
import Layout from '../../templates/Layout';
import schema from './assets/schema.jpg';

const PowerStationPage = () => (
  <Layout
    content={() => (
      <div>
        <p>Power station - "New Digital"</p>
        <img className="rounded w-80" src={schema} alt="schema" />
      </div>
    )}
  />
);

export default PowerStationPage;
