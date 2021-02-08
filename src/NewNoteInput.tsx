import React, { ChangeEvent, useState } from 'react';

interface NewNoteInputProps {
  addNote(note: string): void; // 실행문이 바로 props로 내려옴
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = useState('');

  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const onAddNoteClick = () => {
    addNote(note);
    setNote(''); // 노트 디스패치하고, "초기화"하는 로직
  };

  return (
    <div>
      <input
        onChange={updateNote}
        value={note}
        type="text"
        name="note"
        placeholder="Note"
      />
      <button onClick={onAddNoteClick}>Add note</button>
    </div>
  );
};
