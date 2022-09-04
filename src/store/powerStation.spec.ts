import { renderHook, act } from '@testing-library/react-hooks';
import { Measurement, usePowerStation } from './powerStation.';

describe('Test power station store', () => {
  test('test switching circuit breakers', () => {
    const { result } = renderHook(() => usePowerStation());

    const getCurrentLoad = (el: Measurement) => el.name === 'Current load';
    const getPower = (el: Measurement) => el.name === 'Power';

    expect(result.current.circuitBreakers.first).toBe(true);
    expect(result.current.circuitBreakers.second).toBe(true);
    expect(result.current.circuitBreakers.section).toBe(false);

    expect(
      result.current.measurement.filter(getCurrentLoad)[0].value1,
    ).toBeGreaterThan(0);
    expect(
      result.current.measurement.filter(getPower)[0].value1,
    ).toBeGreaterThan(0);

    act(() => {
      result.current.toggleSectionCB(true);
      result.current.toggleFirstCB(false);
    });

    expect(result.current.circuitBreakers.first).toBe(false);
    expect(result.current.circuitBreakers.second).toBe(true);
    expect(result.current.circuitBreakers.section).toBe(true);

    expect(result.current.measurement.filter(getCurrentLoad)[0].value1).toEqual(
      0,
    );
    expect(result.current.measurement.filter(getPower)[0].value1).toEqual(0);
  });
});
