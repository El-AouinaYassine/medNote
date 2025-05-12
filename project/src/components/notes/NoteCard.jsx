import { useState } from 'react';
import { format } from 'date-fns';
import { useData } from '../../context/DataContext';
import StructuredData from './StructuredData';
import './NoteCard.css';

function NoteCard({ note, isExpanded, onToggleExpand }) {
  // Format the date
  const formattedDate = format(new Date(note.createdAt), 'MMM d, yyyy');
  
  // Get the tag color class
  const colorClass = `note-card-${note.color}`;
  
  // Truncate content for preview
  const previewContent = note.content.length > 150 
    ? `${note.content.substring(0, 150)}...` 
    : note.content;
    
  return (
    <div className={`note-card ${colorClass} ${isExpanded ? 'expanded' : ''}`}>
      <div className="note-card-header">
        <div className="note-card-tag"></div>
        <h3 className="note-card-title">{note.title}</h3>
        <div className="note-card-meta">
          <div className="note-card-patient">{note.patientName}</div>
          <div className="note-card-date">{formattedDate}</div>
        </div>
      </div>
      
      <div className="note-card-content">
        {isExpanded ? (
          <>
            <p>{note.content}</p>
            <StructuredData data={note.structuredData} />
          </>
        ) : (
          <p>{previewContent}</p>
        )}
      </div>
      
      <div className="note-card-footer">
        <button 
          className="button button-outline note-card-expand" 
          onClick={onToggleExpand}
        >
          {isExpanded ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="button-icon">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              Close
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="button-icon">
                <polyline points="15 3 21 3 21 9"></polyline>
                <polyline points="9 21 3 21 3 15"></polyline>
                <line x1="21" y1="3" x2="14" y2="10"></line>
                <line x1="3" y1="21" x2="10" y2="14"></line>
              </svg>
              Expand
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default NoteCard;