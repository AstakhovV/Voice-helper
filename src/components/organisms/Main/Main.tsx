import Recognition from '../../molecules/Recognition/Recognition';
import React from 'react';
import { useNotes } from '../../../store/notes';
import { FiX } from 'react-icons/fi';

const Main = () => {
  const { notes, deleteNote } = useNotes();

  return (
    <div className="flex p-4 flex-col gap-4">
      <Recognition />
      <p className="text-xs self-center">
        Создайте заметку при помощи команды "Сделай заметку", далее текст
        заметки
      </p>
      <ul className="flex flex-col gap-2">
        {notes.map((note) => (
          <li
            key={note.id}
            className="flex gap-4 justify-between rounded bg-slate-500 p-2"
          >
            <p>{note.value}</p>
            <button onClick={() => deleteNote(note.id)}>
              <FiX />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
