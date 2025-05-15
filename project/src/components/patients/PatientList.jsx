import { format } from 'date-fns';
import './PatientList.css';

function PatientList({ patients, onSelectPatient }) {
  if (patients.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </div>
        <h3>No Patients Found</h3>
        <p>Try adjusting your search or add a new patient.</p>
      </div>
    );
  }
  
  return (
    <div className="patient-list">
      {patients.map(patient => {
        const lastVisitDate = patient.lastVisit 
          ? format(new Date(patient.lastVisit), 'MMM d, yyyy')
          : 'No visits';
          
        return (
          <div 
            key={patient.id} 
            className="patient-card"
            onClick={() => onSelectPatient(patient.id)}
          >
            <div className="patient-card-left">
              <div className="patient-avatar">
                {patient.first_name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="patient-info">
                <h3 className="patient-name">{patient.name}</h3>
                <div className="patient-meta">
                  <span className="patient-demographic">
                    {patient.age} yrs • {patient.gender}
                  </span>
                  <span className="patient-contact">{patient.contact}</span>
                </div>
              </div>
            </div>
            
            <div className="patient-card-right">
              <div className="patient-last-visit">
                <div className="last-visit-label">Last Visit</div>
                <div className="last-visit-date">{lastVisitDate}</div>
              </div>
              <div className="patient-history-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PatientList;