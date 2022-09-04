import { renderHook, act } from '@testing-library/react-hooks';
import { Note, useNotes } from './notes';

describe('Test notes store', () => {
  test('add/delete note', () => {
    const { result } = renderHook(() => useNotes());
    const newNote = 'new note';
    const noteToDelete = result.current.notes[0];
    const checkNewNote = (arr: Note[], value: string) =>
      arr.some((el) => el.value.includes(value));

    expect(result.current.notes).toHaveLength(3);

    act(() => {
      result.current.setNote(newNote);
    });
    expect(result.current.notes).toHaveLength(4);
    expect(checkNewNote(result.current.notes, newNote)).toBe(true);

    act(() => {
      result.current.deleteNote(noteToDelete.id);
    });

    expect(result.current.notes).toHaveLength(3);
    expect(checkNewNote(result.current.notes, noteToDelete.value)).toBe(false);
  });
});
