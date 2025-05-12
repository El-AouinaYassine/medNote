import { Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import './Header.css';

function Header({ toggleSidebar }) {
  const { loading } = useData();
  
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <button className="menu-button" onClick={toggleSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <Link to="/" className="logo">
            <span className="logo-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </span>
            <span className="logo-text">MedNotes</span>
          </Link>
        </div>
        
        <div className="header-center">
          <div className="search-bar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="search-icon">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              placeholder="Search notes, patients..." 
              className="search-input"
            />
          </div>
        </div>
        
        <div className="header-right">
          {loading && (
            <span className="loading-indicator">
              <span className="loading-dot"></span>
              <span className="loading-dot"></span>
              <span className="loading-dot"></span>
            </span>
          )}
          <button className="user-button">
            <span className="user-avatar">DR</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;