import { Command } from '../types/common';
import { toast } from 'react-toastify';
import { PowerStation } from '../store/powerStation.';
import { uid } from 'uid';

export const testCallback: Omit<
  PowerStation,
  'circuitBreakers' | 'measurement'
> = {
  toggleFirstCB: () => console.log('1'),
  toggleSecondCB: () => console.log('2'),
  toggleSectionCB: () => console.log('3'),
};

export const stationCommands: ({
  toggleFirstCB,
  toggleSecondCB,
  toggleSectionCB,
}: Omit<PowerStation, 'circuitBreakers' | 'measurement'>) => Command[] = ({
  toggleFirstCB,
  toggleSecondCB,
  toggleSectionCB,
}) => {
  const asyncCommand = <T>(value: T, fn: (value: T) => void) =>
    new Promise((resolve) => setTimeout(() => resolve(fn(value)), 1000));

  return [
    {
      command: 'Включить секционный выключатель',
      id: uid(),
      description: 'Включается секционный выключатель',
      callback: () => {
        toggleSectionCB(true);
        toast.info('СВ включен');
      },
    },
    {
      command: 'Отключить секционный выключатель',
      id: uid(),
      description: 'Отключается секционный выключатель',
      callback: () => {
        toggleSectionCB(false);
        toast.info('СВ отключен');
      },
    },
    {
      command: 'Включить первый выключатель',
      id: uid(),
      description: 'Включается выключатель, питающий первый трансформатор',
      callback: () => {
        toggleFirstCB(true);
        toast.info('Первый выключатель включен');
      },
    },
    {
      command: 'Отключить первый выключатель',
      description: 'Отключается выключатель, питающий первый трансформатор',
      id: uid(),
      callback: () => {
        toggleFirstCB(false);
        toast.info('Первый выключатель отключен');
      },
    },
    {
      command: 'Включить второй выключатель',
      description: 'Включается выключатель, питающий второй трансформатор',
      id: uid(),
      callback: () => {
        toggleSecondCB(true);
        toast.info('Второй выключатель включен');
      },
    },
    {
      command: 'Отключить второй выключатель',
      id: uid(),
      description: 'Отключается выключатель, питающий второй трансформатор',
      callback: () => {
        toggleSecondCB(false);
        toast.info('Второй выключатель отключен');
      },
    },
    {
      command: 'Вывести первую линию в ремонт',
      id: uid(),
      description: 'Выполнение алгоритма по выводу в ремонт линии 1',
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
      id: uid(),
      description: 'Выполнение алгоритма по вводу в работу линии 1',
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
