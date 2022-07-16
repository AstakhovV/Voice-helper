import clsx from 'clsx';
import styles from './Switchers.module.scss';
import React from 'react';
import { usePower } from '../../../application/usePower';

export const Switchers = () => {
  const { circuitBreakers } = usePower();

  return (
    <>
      <div
        className={clsx(
          styles.firstSwitcher,
          'left-20 w-12 h-12 bg-green-500 border-2 border-black',
          { ['bg-green-500']: circuitBreakers.first },
          { ['bg-red-500']: !circuitBreakers.first },
        )}
      />
      <div
        className={clsx(
          styles.secondSwitcher,
          'left-20 w-12 h-12 bg-green-500 border-2 border-black',
          { ['bg-green-500']: circuitBreakers.second },
          { ['bg-red-500']: !circuitBreakers.second },
        )}
      />
      <div
        className={clsx(
          styles.sectionSwitcher,
          'left-20 w-12 h-12 border-2 border-black',
          { ['bg-green-500']: circuitBreakers.section },
          { ['bg-red-500']: !circuitBreakers.section },
        )}
      />
    </>
  );
};
