import create from 'zustand';
import { uid } from 'uid';

interface Item {
  command: string;
  id: string;
  date: string;
}

export interface HistoryStore {
  history: Item[];
  setItem: (command: string) => void;
}

const getDate = () => {
  const date = new Date(Date.now());

  return `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`;
};

export const useHistory = create<HistoryStore>((set) => ({
  history: [],
  setItem: (command: string) =>
    set((state) => ({
      history: [...state.history, { command, id: uid(), date: getDate() }],
    })),
}));
