import { useCallback, useState } from 'react';
import { Measurement } from '../store/powerStation.';

export const useRealMeasurement = (data: Measurement[]) => {
  const [realMeasurement, setRealMeasurement] = useState(data);
  const [operator, setOperator] = useState<'+' | '-'>('+');

  const changeData = useCallback(
    (param1: number, param2: number) =>
      operator === '+'
        ? Math.round((param1 + param2) * 100) / 100
        : Math.round((param1 - param2) * 100) / 100,
    [operator],
  );

  const updateMeasurement = useCallback(() => {
    setRealMeasurement(
      data.map((el) => {
        const { value1, value2, name } = el;

        if (name === 'Voltage') {
          return {
            ...el,
            value1: changeData(value1, 0.1),
            value2: changeData(value2, 0.1),
          };
        }

        if (name === 'Current load') {
          return {
            ...el,
            value1: value1 ? changeData(value1, 3) : 0,
            value2: value2 ? changeData(value2, 5) : 0,
          };
        }

        if (name === 'Power') {
          return {
            ...el,
            value1: value1 ? changeData(value1, 23) : 0,
            value2: value2 ? changeData(value2, 11) : 0,
          };
        }

        if (name === 'Frequency') {
          return {
            ...el,
            value1: changeData(value1, 0.01),
            value2: changeData(value2, 0.04),
          };
        }

        return el;
      }),
    );
    setOperator((prevState) => (prevState === '+' ? '-' : '+'));
  }, [changeData, data]);

  return {
    realMeasurement,
    updateMeasurement,
  };
};
