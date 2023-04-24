import { useState, useEffect } from 'react';
import Header from "./components/Header"
import Form from "./components/Form"
import PatientList from "./components/PatientList"

function App() {
  const [patients, setPatients] = useState(JSON.parse(localStorage.getItem('patients')) ?? []);
  const [patient, setPatient] = useState({})

  useEffect(() =>{
    const readLS = () =>{
      const patientsLS = JSON.parse(localStorage.getItem('patients')) ?? [];

      setPatients(patientsLS)
    }
    readLS();
  },[]);

  useEffect(() => {
    //if(patients.length > 0){
      localStorage.setItem('patients', JSON.stringify(patients))
    //}
  },[patients])
  
  const patientDeletion = id =>{
    const updatedPatients = patients.filter( patient => patient.id !== id);

    setPatients(updatedPatients)
  }
  
  return (
    <div className="container mx-auto mt-20">
      <Header 
        
      />
      <div className="mt-12 md:flex">
        <Form 
          patients={patients}
          setPatients={setPatients}
          patient={patient} 
          setPatient={setPatient}
        />
        <PatientList 
          patients={patients}
          setPatient={setPatient}
          patientDeletion={patientDeletion}
        />
      </div>
    </div>
  )
}

export default App
