import React from 'react';
import { useRecognition } from '../../../application/useRecognition';
import RecognitionItem from './RecognitionItem';

interface Props {
  placeholder?: string;
}

const Recognition = ({ placeholder }: Props) => {
  const { transcript, interimTranscript, listening, handleToggleListening } =
    useRecognition();

  return (
    <RecognitionItem
      transcript={transcript}
      placeholder={placeholder}
      onClick={handleToggleListening}
      listening={listening}
      interimTranscript={interimTranscript}
    />
  );
};

export default Recognition;
