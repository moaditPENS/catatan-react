// NoteList.js
import React from 'react';

const NoteList = ({ notes, onDelete, onArchive }) => {
  return (
    <div>
      <h2>Daftar Catatan</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <strong>{note.title}</strong>
            <p>{note.body}</p>
            <p>
              <em>Created at: {note.createdAt}</em>
            </p>
            <button onClick={() => onDelete(note.id)}>Hapus</button>
            {!note.archived && (
              <button onClick={() => onArchive(note.id)}>Arsipkan</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
