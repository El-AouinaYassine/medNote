import { useState } from 'react';
import { useData } from '../context/DataContext';
import NoteList from '../components/notes/NoteList';
import NoteModal from '../components/notes/NoteModal';
import FilterBar from '../components/common/FilterBar';
import LoadingSpinner from '../components/common/LoadingSpinner';
import './NotesPage.css';

function NotesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    search: '',
    patient: 'all',
    diagnosis: 'all',
    color: 'all',
    sortBy: 'newest'
  });
  
  const { notes, patients, loading } = useData();
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  const handleFilterChange = (name, value) => {
    setFilters({
      ...filters,
      [name]: value
    });
  };
  
  // Apply filters
  const filteredNotes = notes.filter(note => {
    // Text search
    if (filters.search && !note.title.toLowerCase().includes(filters.search.toLowerCase()) && 
        !note.content.toLowerCase().includes(filters.search.toLowerCase()) &&
        !note.patientName.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    
    // Patient filter
    if (filters.patient !== 'all' && note.patientId !== filters.patient) {
      return false;
    }
    
    // Diagnosis filter
    if (filters.diagnosis !== 'all' && 
        !note.structuredData.diagnosis.some(d => 
          d.toLowerCase().includes(filters.diagnosis.toLowerCase())
        )) {
      return false;
    }
    
    // Color filter
    if (filters.color !== 'all' && note.color !== filters.color) {
      return false;
    }
    
    return true;
  });
  
  // Apply sorting
  const sortedNotes = [...filteredNotes].sort((a, b) => {
    if (filters.sortBy === 'newest') {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
    if (filters.sortBy === 'oldest') {
      return new Date(a.createdAt) - new Date(b.createdAt);
    }
    return 0;
  });
  
  // Calculate diagnoses for filter options
  const diagnosisOptions = Array.from(
    new Set(
      notes.flatMap(note => 
        note.structuredData.diagnosis.map(d => d.toLowerCase())
      )
    )
  );
  
  return (
    <div className="notes-page">
      <div className="page-header">
        <h1>Medical Notes</h1>
        <p className="page-description">
          View and manage structured medical notes
        </p>
      </div>
      
      <FilterBar 
        filters={filters}
        onFilterChange={handleFilterChange}
        patientOptions={patients}
        diagnosisOptions={diagnosisOptions}
      />
      
      {loading ? (
        <LoadingSpinner message="Processing medical data..." />
      ) : (
        <NoteList notes={sortedNotes} />
      )}
      
      <button className="button-floating" onClick={openModal}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
      
      {isModalOpen && (
        <NoteModal 
          onClose={closeModal}
          patients={patients}
        />
      )}
    </div>
  );
}

export default NotesPage;