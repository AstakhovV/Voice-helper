import React, { PropsWithChildren } from 'react';
import { PowerStation, usePowerStation } from '../store/powerStation.';

const PowerStationContext = React.createContext<PowerStation>(undefined!);

export const usePower = () => React.useContext(PowerStationContext);

const PowerStationProvider = ({ children }: PropsWithChildren<unknown>) => {
  const {
    toggleFirstCB,
    toggleSecondCB,
    toggleSectionCB,
    circuitBreakers,
    measurement,
  } = usePowerStation();

  const imitateRealMeasurement = () =>
    setInterval(
      () =>
        measurement.map((el) => {
          if (el.name === 'Voltage') {
            return { ...el, value1: el.value1 + 1, value2: el.value2 + 1 };
          }

          return el;
        }),
      1000,
    );

  console.log(imitateRealMeasurement());

  const value = React.useMemo(
    () => ({
      toggleFirstCB,
      toggleSecondCB,
      toggleSectionCB,
      circuitBreakers,
      measurement,
    }),
    [
      circuitBreakers,
      measurement,
      toggleFirstCB,
      toggleSecondCB,
      toggleSectionCB,
    ],
  );

  return (
    <PowerStationContext.Provider value={value}>
      {children}
    </PowerStationContext.Provider>
  );
};

export default PowerStationProvider;
