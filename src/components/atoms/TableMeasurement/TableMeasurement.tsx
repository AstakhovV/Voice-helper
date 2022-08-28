import React from 'react';
import { usePower } from '../../../application/usePower';

const TableMeasurement = () => {
  const { realMeasurement } = usePower();

  return (
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
  );
};

export default TableMeasurement;
