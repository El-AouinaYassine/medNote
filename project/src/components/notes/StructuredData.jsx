import { useState } from 'react';
import './StructuredData.css';

function StructuredData({ data }) {
  const [expandedSections, setExpandedSections] = useState({
    patient: true,
    diagnosis: true,
    symptoms: true,
    medications: true,
    plan: true
  });
  
  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };
  
  return (
    <div className="structured-data">
      <div className="structured-data-header">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="structured-icon">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
        <h4>Structured Medical Data</h4>
        <div className="structured-badge">NLP Processed</div>
      </div>
      
      {/* Patient Information */}
      <div className="structured-section">
        <div 
          className="collapsible-header"
          onClick={() => toggleSection('patient')}
        >
          <span className={`collapsible-icon ${expandedSections.patient ? 'expanded' : ''}`}>▶</span>
          <span className="structured-key">patient:</span>
        </div>
        
        {expandedSections.patient && (
          <div className="structured-content">
            <div className="structured-item">
              <span className="structured-key">name:</span> 
              <span className="structured-value">{data.patient.name}</span>
            </div>
            <div className="structured-item">
              <span className="structured-key">age:</span> 
              <span className="structured-value">{data.patient.age}</span>
            </div>
            <div className="structured-item">
              <span className="structured-key">gender:</span> 
              <span className="structured-value">{data.patient.gender}</span>
            </div>
            <div className="structured-item">
              <span className="structured-key">contact:</span> 
              <span className="structured-value">{data.patient.contact}</span>
            </div>
          </div>
        )}
      </div>
      
      {/* Diagnosis */}
      <div className="structured-section">
        <div 
          className="collapsible-header"
          onClick={() => toggleSection('diagnosis')}
        >
          <span className={`collapsible-icon ${expandedSections.diagnosis ? 'expanded' : ''}`}>▶</span>
          <span className="structured-key">diagnosis:</span>
        </div>
        
        {expandedSections.diagnosis && (
          <div className="structured-content">
            {data.diagnosis.map((item, index) => (
              <div key={index} className="structured-item structured-array-item">
                <span className="structured-value">{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Symptoms */}
      <div className="structured-section">
        <div 
          className="collapsible-header"
          onClick={() => toggleSection('symptoms')}
        >
          <span className={`collapsible-icon ${expandedSections.symptoms ? 'expanded' : ''}`}>▶</span>
          <span className="structured-key">symptoms:</span>
        </div>
        
        {expandedSections.symptoms && (
          <div className="structured-content">
            {data.symptoms.map((item, index) => (
              <div key={index} className="structured-item structured-array-item">
                <span className="structured-value">{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Medications */}
      <div className="structured-section">
        <div 
          className="collapsible-header"
          onClick={() => toggleSection('medications')}
        >
          <span className={`collapsible-icon ${expandedSections.medications ? 'expanded' : ''}`}>▶</span>
          <span className="structured-key">medications:</span>
        </div>
        
        {expandedSections.medications && (
          <div className="structured-content">
            {data.medications.map((item, index) => (
              <div key={index} className="structured-item structured-array-item">
                <span className="structured-value">{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Plan */}
      <div className="structured-section">
        <div 
          className="collapsible-header"
          onClick={() => toggleSection('plan')}
        >
          <span className={`collapsible-icon ${expandedSections.plan ? 'expanded' : ''}`}>▶</span>
          <span className="structured-key">plan:</span>
        </div>
        
        {expandedSections.plan && (
          <div className="structured-content">
            <div className="structured-item">
              <span className="structured-value">{data.plan}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default StructuredData;