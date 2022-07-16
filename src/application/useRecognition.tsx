import React, { PropsWithChildren, useCallback, useEffect } from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { toast } from 'react-toastify';
import { Commands } from '../types/common';

interface Value {
  transcript: string;
  interimTranscript: string;
  listening: boolean;
  handleToggleListening: () => Promise<void>;
}

const RecognitionContext = React.createContext<Value>(undefined!);

export const useRecognition = () => React.useContext(RecognitionContext);

interface Props extends PropsWithChildren<unknown> {
  commands: Commands[];
}

const RecognitionProvider = ({ children, commands }: Props) => {
  const {
    transcript,
    browserSupportsSpeechRecognition,
    interimTranscript,
    listening,
    finalTranscript,
  } = useSpeechRecognition({ commands, clearTranscriptOnListen: true });

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      toast.error('Your browser is not supported!');
    }
  }, [browserSupportsSpeechRecognition]);

  useEffect(() => {
    if (finalTranscript) SpeechRecognition.stopListening();
  }, [finalTranscript]);

  const handleToggleListening = useCallback(async () => {
    if (listening) SpeechRecognition.stopListening();
    await SpeechRecognition.startListening({ continuous: true });
  }, [listening]);

  const value = React.useMemo(
    () => ({
      transcript,
      interimTranscript,
      listening,
      handleToggleListening,
    }),
    [handleToggleListening, interimTranscript, listening, transcript],
  );

  return (
    <RecognitionContext.Provider value={value}>
      {children}
    </RecognitionContext.Provider>
  );
};

export default RecognitionProvider;
