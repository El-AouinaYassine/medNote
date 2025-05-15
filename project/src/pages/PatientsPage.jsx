import { useState } from 'react';
import { useData } from '../context/DataContext';
import PatientList from '../components/patients/PatientList';
import PatientDetail from '../components/patients/PatientDetail';
import PatientModal from '../components/patients/PatientModal';
import LoadingSpinner from '../components/common/LoadingSpinner';
import './PatientsPage.css';

function PatientsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPatientId, setSelectedPatientId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  const { patients, loading } = useData();
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  const handleSelectPatient = (patientId) => {
    setSelectedPatientId(patientId);
  };
  
  const handleBackToList = () => {
    setSelectedPatientId(null);
  };
  
  const filteredPatients = patients.filter(patient => 
    patient.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  if (loading) {
    return <LoadingSpinner message="Loading patient data..." />;
  }
  
  return (
    <div className="patients-page">
      {selectedPatientId ? (
        <PatientDetail 
          patientId={selectedPatientId}
          onBack={handleBackToList}
        />
      ) : (
        <>
          <div className="page-header">
            <div className="page-header-content">
              <h1>Patients</h1>
              <p className="page-description">
                Manage patient information and view their medical history
              </p>
            </div>
            <button className="button button-primary" onClick={openModal}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="button-icon">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              Add Patient
            </button>
          </div>
          
          <div className="search-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="search-icon">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder="Search patients by name or email..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <PatientList 
            patients={filteredPatients}
            onSelectPatient={handleSelectPatient}
          />
        </>
      )}
      
      {isModalOpen && (
        <PatientModal onClose={closeModal} />
      )}
    </div>
  );
}

export default PatientsPage;