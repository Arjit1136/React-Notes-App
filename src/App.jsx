import {nanoid} from 'nanoid';
import { useState } from 'react'
import './App.css'
import NotesList from './components/NotesList'
import './index.css'
function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text:"This is my first note!",
      date:"12/03/2021"
    },
    {
      id: nanoid(),
      text:"This is my second note!",
      date:"21/04/2021"
    },
    {
      id: nanoid(),
      text:"This is my third note!",
      date:"15/05/2021"
    },
    {
      id: nanoid(),
      text:"This is my fourth note!",
      date:"19/05/2021"
    }
  ])
  const addNote = (text) => {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }
  return (
    <div className='container'>
      <NotesList notes={notes} handleAddNote={addNote}/>
    </div>
  )
}

export default App
