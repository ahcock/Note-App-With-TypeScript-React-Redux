import React from 'react';
import { NewNoteInput } from './NewNoteInput';
import { NotesState } from './notesReducer';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from './actions';

function App() {
  const notes = useSelector<NotesState, NotesState['notes']>(
    (state) => state.notes
  );

  const dispatch = useDispatch();

  const ondAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  return (
    <>
      <NewNoteInput addNote={ondAddNote} />
      <hr />
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
