import { Command } from '../types/common';
import { toast } from 'react-toastify';
import { uid } from 'uid';

export const globalCommands = (
  setNotes?: (note: string) => void,
): Command[] => [
  {
    command: 'Привет',
    id: uid(),
    description: 'Приветствие',
    callback: () => toast.info('Приветствую, я ваш голосовой помощник'),
  },
  {
    command: 'Открой сайт :name',
    id: uid(),
    description: 'Открыть в новой вкладке необходимый сайт',
    callback: (name) => window.open(`https://www.${name}`, '_blank')?.focus(),
  },
  {
    command: 'Сделай заметку *',
    id: uid(),
    description: 'Создать новую заметку',
    callback: (note) => {
      if (note && setNotes) {
        setNotes(note);
        toast.info('Заметка создана');
      }
    },
  },
];
