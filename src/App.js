// App.js
import React, { useState } from 'react';
import './App.css';
import NoteList from './NoteList';
import SearchBar from './SearchBar';

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Babel',
      body: 'Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.',
      archived: false,
      createdAt: '2022-04-14T04:27:34.572Z'
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const addNote = (title, body) => {
    const newNote = {
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const archiveNote = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: true } : note
      )
    );
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Aplikasi Catatan Pribadi</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {filteredNotes.length === 0 ? (
        <p>Tidak ada catatan.</p>
      ) : (
        <NoteList
          notes={filteredNotes}
          onDelete={deleteNote}
          onArchive={archiveNote}
        />
      )}
      <hr />
      <h2>Tambah Catatan Baru</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const title = e.target.title.value;
          const body = e.target.body.value;
          addNote(title, body);
          e.target.reset();
        }}
      >
        <label>
          Judul:
          <input type="text" name="title" required maxLength="50" />
        </label>
        <br />
        <label>
          Isi Catatan:
          <textarea name="body" required />
        </label>
        <br />
        <button type="submit">Tambah Catatan</button>
      </form>
    </div>
  );
}

export default App;
