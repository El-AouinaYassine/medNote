import { useState } from 'react';
import { useData } from '../../context/DataContext';
import './NoteModal.css';

function NoteModal({ onClose, patients }) {
  const [note, setNote] = useState({
    title: '',
    content: '',
    patientId: '',
    color: 'blue'
  });
  
  const { addNote, loading } = useData();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({
      ...note,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!note.title || !note.content || !note.patientId) {
      alert('Please fill out all required fields');
      return;
    }
    
    // Add the note (which triggers NLP processing)
    addNote(note);
    
    // Close the modal
    onClose();
  };
  
  const handleColorSelect = (color) => {
    setNote({
      ...note,
      color
    });
  };
  
  const colorOptions = [
    { name: 'red', label: 'Urgent' },
    { name: 'orange', label: 'Important' },
    { name: 'yellow', label: 'Caution' },
    { name: 'green', label: 'Stable' },
    { name: 'blue', label: 'Routine' },
    { name: 'purple', label: 'Specialist' }
  ];
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal note-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">New Medical Note</h2>
          <button className="modal-close" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className="modal-body">
          <form onSubmit={handleSubmit} className="note-form">
            <div className="form-group">
              <label htmlFor="patientId" className="form-label">Patient</label>
              <select
                id="patientId"
                name="patientId"
                className="select"
                value={note.patientId}
                onChange={handleChange}
                required
              >
                <option value="">Select a patient</option>
                {patients.map(patient => (
                  <option key={patient.id} value={patient.id}>
                    {patient.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="title" className="form-label">Note Title</label>
              <input
                type="text"
                id="title"
                name="title"
                className="input"
                value={note.title}
                onChange={handleChange}
                placeholder="E.g., Follow-up Appointment, Annual Physical"
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Note Priority/Type</label>
              <div className="color-picker">
                {colorOptions.map(color => (
                  <div key={color.name} className="color-option-container">
                    <button
                      type="button"
                      className={`color-option color-${color.name} ${note.color === color.name ? 'selected' : ''}`}
                      onClick={() => handleColorSelect(color.name)}
                      aria-label={`Select ${color.label}`}
                    ></button>
                    <span className="color-label">{color.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="content" className="form-label">Note Content</label>
              <textarea
                id="content"
                name="content"
                className="textarea"
                value={note.content}
                onChange={handleChange}
                placeholder="Enter your medical notes here. Include patient symptoms, diagnoses, medications, and treatment plan. This text will be processed into structured data."
                rows={8}
                required
              ></textarea>
            </div>
            
            <div className="nlp-info">
              <div className="nlp-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </div>
              <p>
                Your free-text note will be processed using NLP to extract structured information about diagnoses, symptoms, medications, and treatment plans.
              </p>
            </div>
          </form>
        </div>
        
        <div className="modal-footer">
          <button 
            type="button" 
            className="button button-outline" 
            onClick={onClose}
            disabled={loading}
          >
            Cancel
          </button>
          <button 
            type="button" 
            className="button button-primary"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? (
              <span className="loading-text">
                <span className="loading-spinner-sm"></span>
                Processing...
              </span>
            ) : "Save & Process Note"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteModal;