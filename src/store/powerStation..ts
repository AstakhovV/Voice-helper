import create from 'zustand';

export type CircuitBreakers = {
  first: boolean;
  second: boolean;
  section: boolean;
};

export type Measurement = {
  name: string;
  value1: number;
  value2: number;
  unit: string;
};

export interface PowerStation {
  circuitBreakers: CircuitBreakers;
  measurement: Measurement[];
  toggleFirstCB: (value: boolean) => void;
  toggleSecondCB: (value: boolean) => void;
  toggleSectionCB: (value: boolean) => void;
}

const defaultMeasurement = [
  { name: 'Voltage', value1: 10.4, value2: 10.3, unit: 'kV' },
  { name: 'Current load', value1: 53, value2: 46, unit: 'A' },
  { name: 'Power', value1: 551.2, value2: 473.8, unit: 'kVA' },
  { name: 'Frequency', value1: 50, value2: 49.9, unit: 'Hz' },
];

const changeMeasurement = (type: 'first' | 'second') => (el: Measurement) => {
  if (el.name === 'Current load') {
    return type === 'first'
      ? { ...el, value1: 0, value2: 99 }
      : { ...el, value1: 99, value2: 0 };
  }

  if (el.name === 'Power') {
    return type === 'first'
      ? { ...el, value1: 0, value2: 1025 }
      : { ...el, value1: 1025, value2: 0 };
  }

  return el;
};

export const usePowerStation = create<PowerStation>((set) => ({
  circuitBreakers: {
    first: true,
    second: true,
    section: false,
  },
  measurement: defaultMeasurement,
  toggleFirstCB: (value: boolean) =>
    set((state) => ({
      circuitBreakers: {
        ...state.circuitBreakers,
        first: value,
      },
      measurement: value
        ? defaultMeasurement
        : [...state.measurement.map(changeMeasurement('first'))],
    })),
  toggleSecondCB: (value: boolean) =>
    set((state) => ({
      circuitBreakers: {
        ...state.circuitBreakers,
        second: value,
      },
      measurement: value
        ? defaultMeasurement
        : [...state.measurement.map(changeMeasurement('second'))],
    })),
  toggleSectionCB: (value: boolean) => {
    set((state) => ({
      circuitBreakers: {
        ...state.circuitBreakers,
        section: value,
      },
    }));
  },
}));
