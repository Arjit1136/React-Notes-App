import Note from "./Note";
import AddNote from "./addNote";
const NotesList= ({notes,handleAddNote,handleDeleteNote}) => {
    return (
      <div className="notes-list">
        {notes.map((note, id) => {
          return (
            <Note
              key={id}
              id={note.id}
              text={note.text}
              date={note.date}
              handleDeleteNote={handleDeleteNote}
            />
          )
        })}
        <AddNote
          handleAddNote={handleAddNote}
        />
      </div>
    )
}
export default NotesList;