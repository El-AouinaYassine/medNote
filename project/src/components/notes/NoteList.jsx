import { useState } from 'react';
import NoteCard from './NoteCard';
import './NoteList.css';

function NoteList({ notes }) {
  const [expandedNote, setExpandedNote] = useState(null);
  
  // Toggle expanded note
  const toggleExpandNote = (noteId) => {
    if (expandedNote === noteId) {
      setExpandedNote(null);
    } else {
      setExpandedNote(noteId);
    }
  };
  
  if (notes.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        </div>
        <h3>No Notes Found</h3>
        <p>Try adjusting your filters or create a new note.</p>
      </div>
    );
  }
  
  return (
    <div className="notes-grid">
      {notes.map(note => (
        <NoteCard 
          key={note.id}
          note={note}
          isExpanded={expandedNote === note.id}
          onToggleExpand={() => toggleExpandNote(note.id)}
        />
      ))}
    </div>
  );
}

export default NoteList;