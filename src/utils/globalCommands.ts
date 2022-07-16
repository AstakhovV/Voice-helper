import { Commands } from '../types/common';
import { toast } from 'react-toastify';

export const globalCommands: Commands[] = [
  {
    command: 'Привет',
    callback: () => toast.info('Приветствую, я ваш голосовой помощник'),
  },
  {
    command: 'открыть Google',
    callback: () => window.open('https://www.google.com', '_blank')?.focus(),
  },
];
