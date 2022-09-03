import TableMeasurement from './TableMeasurement';
import React from 'react';
import { act, render, screen } from '@testing-library/react';
import PowerStationProvider from '../../../application/usePower';

describe('Render TableMeasurement', () => {
  test('TableMeasurement renders correctly', () => {
    render(
      <PowerStationProvider>
        <TableMeasurement />
      </PowerStationProvider>,
    );
    const table = screen.getByRole('table');
    expect(table).toMatchSnapshot();
  });

  test('TableMeasurement has 3x5 grid', () => {
    render(
      <PowerStationProvider>
        <TableMeasurement />
      </PowerStationProvider>,
    );
    const table = screen.getByRole('table');
    const row = table.querySelectorAll('tr');
    const col = table.querySelectorAll('th');
    expect(row).toHaveLength(5);
    expect(col).toHaveLength(3);
  });

  test('TableMeasurement has changing values', async () => {
    jest.useFakeTimers();

    render(
      <PowerStationProvider>
        <TableMeasurement />
      </PowerStationProvider>,
    );
    const tableItemVoltage = screen.getAllByRole('cell')[1];
    const initialValue = '10.4 kV';
    // @ts-ignore
    act(() => jest.advanceTimersByTime(1000));
    expect(tableItemVoltage).not.toHaveTextContent(initialValue);
  });
});
