import { useState } from 'react';
import { useData } from '../../context/DataContext';

function PatientModal({ onClose }) {
  const [patient, setPatient] = useState({
    name: '',
    age: '',
    gender: 'Male',
    contact: '',
    email: '',
    address: '',
    insuranceProvider: '',
    insuranceNumber: '',
    medicalHistory: '',
    allergies: ''
  });
  
  const { addPatient, loading } = useData();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient({
      ...patient,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!patient.name || !patient.age || !patient.contact) {
      alert('Please fill out all required fields');
      return;
    }
    
    // Format the array fields
    const formattedPatient = {
      ...patient,
      age: parseInt(patient.age, 10),
      medicalHistory: patient.medicalHistory.split(',').map(item => item.trim()).filter(Boolean),
      allergies: patient.allergies.split(',').map(item => item.trim()).filter(Boolean)
    };
    
    // Add the patient
    addPatient(formattedPatient);
    
    // Close the modal
    onClose();
  };
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Add New Patient</h2>
          <button className="modal-close" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="form-section">
              <h3 className="form-section-title">Basic Information</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="input"
                    value={patient.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="age" className="form-label">Age *</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    className="input"
                    value={patient.age}
                    onChange={handleChange}
                    min="0"
                    max="120"
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="gender" className="form-label">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    className="select"
                    value={patient.gender}
                    onChange={handleChange}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="contact" className="form-label">Phone Number *</label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    className="input"
                    value={patient.contact}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="form-section">
              <h3 className="form-section-title">Contact Information</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input"
                    value={patient.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="address" className="form-label">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="input"
                    value={patient.address}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            
            <div className="form-section">
              <h3 className="form-section-title">Medical Information</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="insuranceProvider" className="form-label">Insurance Provider</label>
                  <input
                    type="text"
                    id="insuranceProvider"
                    name="insuranceProvider"
                    className="input"
                    value={patient.insuranceProvider}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="insuranceNumber" className="form-label">Insurance Number</label>
                  <input
                    type="text"
                    id="insuranceNumber"
                    name="insuranceNumber"
                    className="input"
                    value={patient.insuranceNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="medicalHistory" className="form-label">Medical History</label>
                  <input
                    type="text"
                    id="medicalHistory"
                    name="medicalHistory"
                    className="input"
                    value={patient.medicalHistory}
                    onChange={handleChange}
                    placeholder="Separate with commas"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="allergies" className="form-label">Allergies</label>
                  <input
                    type="text"
                    id="allergies"
                    name="allergies"
                    className="input"
                    value={patient.allergies}
                    onChange={handleChange}
                    placeholder="Separate with commas"
                  />
                </div>
              </div>
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
            {loading ? 'Saving...' : 'Save Patient'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PatientModal;