import React, { PropsWithChildren, useEffect } from 'react';
import {
  CircuitBreakers,
  Measurement,
  usePowerStation,
} from '../store/powerStation.';
import { useRealMeasurement } from '../utils/useRealMeasurement';

export interface PowerProvider {
  circuitBreakers: CircuitBreakers;
  realMeasurement: Measurement[];
  toggleFirstCB: (value: boolean) => void;
  toggleSecondCB: (value: boolean) => void;
  toggleSectionCB: (value: boolean) => void;
}

const PowerStationContext = React.createContext<PowerProvider>(undefined!);

export const usePower = () => React.useContext(PowerStationContext);

const PowerStationProvider = ({ children }: PropsWithChildren<unknown>) => {
  const {
    toggleFirstCB,
    toggleSecondCB,
    toggleSectionCB,
    circuitBreakers,
    measurement,
  } = usePowerStation();

  const { updateMeasurement, realMeasurement } =
    useRealMeasurement(measurement);

  useEffect(() => {
    const realValues = setInterval(updateMeasurement, 1000);

    return () => clearInterval(realValues);
  }, [updateMeasurement]);

  const value = React.useMemo(
    () => ({
      toggleFirstCB,
      toggleSecondCB,
      toggleSectionCB,
      circuitBreakers,
      realMeasurement,
    }),
    [
      circuitBreakers,
      realMeasurement,
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
