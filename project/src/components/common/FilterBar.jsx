import './FilterBar.css';

function FilterBar({ filters, onFilterChange, patientOptions, diagnosisOptions }) {
  const colorOptions = [
    { value: 'all', label: 'All Colors' },
    { value: 'red', label: 'Red (Urgent)' },
    { value: 'orange', label: 'Orange (Important)' },
    { value: 'yellow', label: 'Yellow (Caution)' },
    { value: 'green', label: 'Green (Stable)' },
    { value: 'blue', label: 'Blue (Routine)' },
    { value: 'purple', label: 'Purple (Specialist)' },
  ];
  
  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
  ];
  
  return (
    <div className="filter-bar">
      <div className="filter-group">
        <div className="filter-search">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="filter-icon">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            placeholder="Search notes..."
            value={filters.search}
            onChange={(e) => onFilterChange('search', e.target.value)}
            className="filter-input"
          />
        </div>
      </div>
      
      <div className="filter-controls">
        <div className="filter-select-group">
          <select
            value={filters.patient}
            onChange={(e) => onFilterChange('patient', e.target.value)}
            className="filter-select"
          >
            <option value="all">All Patients</option>
            {patientOptions.map(patient => (
              <option key={patient.id} value={patient.id}>
                {patient.name}
              </option>
            ))}
          </select>
        </div>
        
        <div className="filter-select-group">
          <select
            value={filters.diagnosis}
            onChange={(e) => onFilterChange('diagnosis', e.target.value)}
            className="filter-select"
          >
            <option value="all">All Diagnoses</option>
            {diagnosisOptions.map((diagnosis, index) => (
              <option key={index} value={diagnosis}>
                {diagnosis.charAt(0).toUpperCase() + diagnosis.slice(1)}
              </option>
            ))}
          </select>
        </div>
        
        <div className="filter-select-group">
          <select
            value={filters.color}
            onChange={(e) => onFilterChange('color', e.target.value)}
            className="filter-select"
          >
            {colorOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        
        <div className="filter-select-group">
          <select
            value={filters.sortBy}
            onChange={(e) => onFilterChange('sortBy', e.target.value)}
            className="filter-select"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;