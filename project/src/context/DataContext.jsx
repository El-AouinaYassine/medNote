import { createContext, useState, useContext, useEffect } from 'react';
import { mockPatients } from '../data/mockPatients';
import { mockNotes } from '../data/mockNotes';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [patients, setPatients] = useState([]);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Initialize with mock data on mount
  useEffect(() => {
    // Simulate API loading
    setLoading(true);
    setTimeout(() => {
      setPatients(mockPatients);
      setNotes(mockNotes);
      setLoading(false);
    }, 800);
  }, []);
  
  // Add a new patient
  const addPatient = (patient) => {
    const newPatient = {
      ...patient,
      id: `p-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    setPatients([...patients, newPatient]);
    return newPatient;
  };
  
  // Add a new note
  const addNote = (note) => {
    // Simulate NLP processing
    setLoading(true);
    
    setTimeout(() => {
      const processedNote = processNoteWithNLP(note);
      setNotes([processedNote, ...notes]);
      setLoading(false);
    }, 1500);
  };
  
  // Simulate NLP processing of a free-text note
  const processNoteWithNLP = (note) => {
    // Get patient info
    const patient = patients.find(p => p.id === note.patientId);
    
    // Extract diagnoses (just a simulation)
    const diagnoses = [];
    const diagnosisKeywords = ['diabetes', 'hypertension', 'asthma', 'arthritis', 'migraine'];
    
    diagnosisKeywords.forEach(keyword => {
      if (note.content.toLowerCase().includes(keyword)) {
        diagnoses.push(keyword);
      }
    });
    
    // Extract symptoms (simulation)
    const symptoms = [];
    const symptomKeywords = ['pain', 'fever', 'cough', 'fatigue', 'nausea', 'dizziness'];
    
    symptomKeywords.forEach(keyword => {
      if (note.content.toLowerCase().includes(keyword)) {
        symptoms.push(keyword);
      }
    });
    
    // Simple medication extraction
    const medications = [];
    const medicationKeywords = ['aspirin', 'ibuprofen', 'paracetamol', 'amoxicillin', 'metformin'];
    
    medicationKeywords.forEach(keyword => {
      if (note.content.toLowerCase().includes(keyword)) {
        medications.push(keyword);
      }
    });
    
    // Generate a structured note from the free text
    const structuredNote = {
      id: `n-${Date.now()}`,
      patientId: note.patientId,
      patientName: patient.name,
      title: note.title || 'Medical Note',
      color: note.color || 'blue',
      content: note.content,
      createdAt: new Date().toISOString(),
      structuredData: {
        patient: {
          id: patient.id,
          name: patient.name,
          age: patient.age,
          gender: patient.gender,
          contact: patient.contact
        },
        diagnosis: diagnoses.length ? diagnoses : ['No specific diagnosis mentioned'],
        symptoms: symptoms.length ? symptoms : ['No specific symptoms mentioned'],
        medications: medications.length ? medications : ['No medications mentioned'],
        plan: 'Follow up in 2 weeks'
      }
    };
    
    return structuredNote;
  };
  
  // Get a single patient by ID
  const getPatient = (id) => {
    return patients.find(patient => patient.id === id);
  };
  
  // Get notes for a specific patient
  const getNotesByPatient = (patientId) => {
    return notes.filter(note => note.patientId === patientId);
  };
  
  // Get a note by ID
  const getNote = (id) => {
    return notes.find(note => note.id === id);
  };
  
  const value = {
    patients,
    notes,
    loading,
    addPatient,
    addNote,
    getPatient,
    getNotesByPatient,
    getNote
  };
  
  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}