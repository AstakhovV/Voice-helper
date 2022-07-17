import schema from '../../pages/PowerStationPage/assets/schema.jpg';
import { Switchers } from '../../atoms/Switchers/Switchers';
import React from 'react';
import Recognition from '../../molecules/Recognition/Recognition';
import { usePower } from '../../../application/usePower';

export const StationControl = () => {
  const { realMeasurement } = usePower();

  return (
    <>
      <div className="bg-white w-full flex gap-10 justify-center items-center rounded relative">
        <div className="w-80 relative">
          <img className="w-80" src={schema} alt="schema" />
          <Switchers />
        </div>
        <table className="table-auto w-80 text-black border-2">
          <thead>
            <tr>
              <th />
              <th className="border-2">Line 1</th>
              <th className="border-2">Line 2</th>
            </tr>
          </thead>
          <tbody>
            {realMeasurement.map((el, i) => (
              <tr key={i}>
                <td className="border-2 font-bold">{el.name}</td>
                <td className="border-2">{`${el.value1} ${el.unit}`}</td>
                <td className="border-2">{`${el.value2} ${el.unit}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Recognition />
    </>
  );
};
