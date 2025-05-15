import { format } from 'date-fns';
import { useData } from '../../context/DataContext';
import NoteList from '../notes/NoteList';
import './PatientDetail.css';

function PatientDetail({ patientId, onBack }) {
  const { getPatient, getNotesByPatient } = useData();
  
  const patient = getPatient(patientId);
  const patientNotes = getNotesByPatient(patientId);
  
  if (!patient) {
    return <div>Patient not found</div>;
  }
  
  // Format dates
  const formattedLastVisit = patient.lastVisit 
    ? format(new Date(patient.lastVisit), 'MMMM d, yyyy')
    : 'No recent visits';
  
  return (
    <div className="patient-detail">
      <div className="patient-detail-header">
        <button className="back-button" onClick={onBack}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>
        <h1>Patient Details</h1>
      </div>
      
      <div className="patient-profile">
        <div className="patient-profile-header">
          <div className="patient-profile-avatar">
            {patient.first_name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="patient-profile-info">
            <h2 className="patient-profile-name">{patient.name}</h2>
            <div className="patient-profile-meta">
              <div className="profile-meta-item">
                <span className="meta-label">Age:</span> {patient.age}
              </div>
              <div className="profile-meta-item">
                <span className="meta-label">Gender:</span> {patient.gender}
              </div>
              <div className="profile-meta-item">
                <span className="meta-label">Last Visit:</span> {formattedLastVisit}
              </div>
            </div>
          </div>
        </div>
        
        <div className="patient-profile-details">
          <div className="profile-card">
            <h3 className="profile-card-title">Contact Information</h3>
            <div className="profile-card-content">
              <div className="profile-detail-item">
                <span className="detail-label">Phone:</span>
                <span className="detail-value">{patient.phone}</span>
              </div>
              <div className="profile-detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">{patient.email}</span>
              </div>
              <div className="profile-detail-item">
                <span className="detail-label">Address:</span>
                <span className="detail-value">{patient.address}</span>
              </div>
            </div>
          </div>
          
          <div className="profile-card">
            <h3 className="profile-card-title">Medical Information</h3>
            <div className="profile-card-content">
              <div className="profile-detail-item">
                <span className="detail-label">Insurance:</span>
                <span className="detail-value">{patient.insurance_provider} (#{patient.insurance_number})</span>
              </div>
              <div className="profile-detail-item">
                <span className="detail-label">Medical History:</span>
                <div className="detail-tags">
                  {(patient.medical_history || "")
                    .split(',')
                    .map(item => item.trim())
                    .map((item, index) => (
                      <span key={index} className="detail-tag">{item}</span>
                  ))}
                </div>
              </div>
              <div className="profile-detail-item">
                <span className="detail-label">Allergies:</span>
                <div className="detail-tags">
                  {(patient.allergies && patient.allergies.trim() !== "") ? (
                    patient.allergies
                      .split(',')
                      .map(item => item.trim())
                      .map((item, index) => (
                        <span key={index} className="detail-tag detail-tag-red">{item}</span>
                      ))
                  ) : (
                    <span className="detail-text">Aucune allergie connue</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="patient-notes-section">
        <h3 className="section-title">Medical Notes</h3>
        <p className="section-description">
          {patientNotes.length > 0 
            ? `${patientNotes.length} medical notes for this patient` 
            : 'No medical notes found for this patient'}
        </p>
        
        {patientNotes.length > 0 && <NoteList notes={patientNotes} />}
      </div>
    </div>
  );
}

export default PatientDetail;