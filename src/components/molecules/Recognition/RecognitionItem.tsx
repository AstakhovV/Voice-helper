import clsx from 'clsx';
import styles from './Recognition.module.scss';
import { FaMicrophone } from 'react-icons/fa';
import React from 'react';

interface Props {
  transcript: string;
  placeholder: string | undefined;
  onClick: () => Promise<void>;
  listening: boolean;
  interimTranscript: string;
}

const RecognitionItem = (props: Props) => {
  const { placeholder, listening, onClick, interimTranscript, transcript } =
    props;

  return (
    <div className="flex flex-col items-center gap-5">
      <p>{transcript ? transcript : placeholder ?? 'Текст вашей команды'}</p>
      <button
        onClick={onClick}
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

export default RecognitionItem;
