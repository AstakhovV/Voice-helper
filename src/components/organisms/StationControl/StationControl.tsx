import schema from '../../pages/PowerStationPage/assets/schema.jpg';
import { Switchers } from '../../atoms/Switchers/Switchers';
import React from 'react';
import Recognition from '../../molecules/Recognition/Recognition';
import TableMeasurement from '../../atoms/TableMeasurement/TableMeasurement';

export const StationControl = () => (
  <>
    <div className="bg-white w-full flex gap-10 justify-center items-center rounded relative">
      <div className="w-80 relative">
        <img className="w-80" src={schema} alt="schema" />
        <Switchers />
      </div>
      <TableMeasurement />
    </div>
    <Recognition />
  </>
);
