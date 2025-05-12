import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import Layout from './components/layout/Layout';
import NotesPage from './pages/NotesPage';
import PatientsPage from './pages/PatientsPage';
import Login from './components/Login';
import Register from './components/Register';
import './styles/App.css';

function App() {
  return (
    <Router>
      <DataProvider>
        <Routes>
          {/* Routes outside the Layout */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Routes inside the Layout */}
          <Route element={<Layout />}>
            <Route path="/" element={<NotesPage />} />
            <Route path="/patients" element={<PatientsPage />} />
          </Route>
        </Routes>
      </DataProvider>
    </Router>
  );
}

export default App;
