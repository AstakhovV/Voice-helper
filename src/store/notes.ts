import create from 'zustand';
import { uid } from 'uid';

export interface Note {
  value: string;
  id: string;
}

export interface NotesStore {
  notes: Note[];
  setNote: (note: string) => void;
  deleteNote: (id: string) => void;
}

const defaultNotes = [
  { value: 'Необходимо вывести первую линию в ремонт к 16:40', id: uid() },
  {
    value:
      'Произвести отбор проб на ремонтируемом оборудовании, вывесить запрещающие знаки и ограждения"',
    id: uid(),
  },
  {
    value:
      'Допустить к работе на трансформатор подрядную организацию "Трансформатор ПРО"',
    id: uid(),
  },
];

export const useNotes = create<NotesStore>((set) => ({
  notes: defaultNotes,
  setNote: (note: string) =>
    set((state) => ({
      notes: [...state.notes, { value: note, id: uid() }],
    })),
  deleteNote: (id: string) =>
    set((state) => ({
      notes: state.notes.filter((note) => note.id !== id),
    })),
}));
