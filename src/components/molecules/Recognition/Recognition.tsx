import clsx from 'clsx';
import styles from './Regonition.module.scss';
import { FaMicrophone } from 'react-icons/fa';
import React from 'react';
import { useRecognition } from '../../../application/useRecognition';

interface Props {
  placeholder?: string;
}

const Recognition = ({ placeholder }: Props) => {
  const { transcript, interimTranscript, listening, handleToggleListening } =
    useRecognition();

  return (
    <div className="flex flex-col items-center gap-5">
      <p>{transcript ? transcript : placeholder ?? 'Текст вашей команды'}</p>
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
