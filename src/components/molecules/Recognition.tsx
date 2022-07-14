import clsx from 'clsx';
import styles from './Regonition.module.scss';
import { FaMicrophone } from 'react-icons/fa';
import React from 'react';
import { useRecognition } from '../../application/useRecognition';

const Recognition = () => {
  const { transcript, interimTranscript, listening, handleToggleListening } =
    useRecognition();

  return (
    <div>
      <h3>Hello World!</h3>
      <p>{transcript ? transcript : 'Start listening for transcript'}</p>
      <button
        onClick={handleToggleListening}
        className={clsx(styles.microBtn, {
          [styles.active]: listening,
          [styles.recognition]: interimTranscript,
        })}
      >
        <FaMicrophone size={60} />
      </button>
    </div>
  );
};

export default Recognition;
