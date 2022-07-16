import { Commands } from '../types/common';
import { toast } from 'react-toastify';
import { PowerStation } from '../store/powerStation.';

export const stationCommands: ({
  toggleFirstCB,
  toggleSecondCB,
  toggleSectionCB,
}: Omit<PowerStation, 'circuitBreakers' | 'measurement'>) => Commands[] = ({
  toggleFirstCB,
  toggleSecondCB,
  toggleSectionCB,
}) => {
  const asyncCommand = <T>(value: T, fn: (value: T) => void) =>
    new Promise((resolve) => setTimeout(() => resolve(fn(value)), 1000));

  return [
    {
      command: 'Включить секционный выключатель',
      callback: () => {
        toggleSectionCB(true);
        toast.info('СВ включен');
      },
    },
    {
      command: 'Отключить секционный выключатель',
      callback: () => {
        toggleSectionCB(false);
        toast.info('СВ отключен');
      },
    },
    {
      command: 'Включить первый выключатель',
      callback: () => {
        toggleFirstCB(true);
        toast.info('Первый выключатель включен');
      },
    },
    {
      command: 'Отключить первый выключатель',
      callback: () => {
        toggleFirstCB(false);
        toast.info('Первый выключатель отключен');
      },
    },
    {
      command: 'Включить второй выключатель',
      callback: () => {
        toggleSecondCB(true);
        toast.info('Второй выключатель включен');
      },
    },
    {
      command: 'Отключить второй выключатель',
      callback: () => {
        toggleSecondCB(false);
        toast.info('Второй выключатель отключен');
      },
    },
    {
      command: 'Вывести первую линию в ремонт',
      callback: async () => {
        await asyncCommand(true, toggleSectionCB);
        toast.info('СВ включен');
        await asyncCommand(false, toggleFirstCB);
        toast.info('Первый выключатель отключен');
        await asyncCommand('Линия №1 в ремонте', toast.success);
      },
    },
    {
      command: 'Ввести в работу первую линию',
      callback: async () => {
        await asyncCommand(true, toggleFirstCB);
        toast.info('Первый выключатель в работе');
        await asyncCommand(false, toggleSectionCB);
        toast.info('СВ отключен');
        await asyncCommand('Линия №1 в работе', toast.success);
      },
    },
  ];
};
