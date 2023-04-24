import { useEffect } from 'react'
import Patient from "./Patient"



const PatientList = ({patients, setPatient, patientDeletion}) => {
    

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen">
        {patients && patients.length ? (  
          <>
        <h2 className="font-black text-3xl text-center">
          Patient List
        </h2>
        <p className="text-xl mt-5 text-center mb-10">
          Manage your {""}
          <span className="text-indigo-600 font-bold"> Patients and Appointments</span>
        </p>

        { patients.map( (patient) => (
          <Patient 
            key={patient.id}
            patient={patient}
            setPatient={setPatient}
            patientDeletion={patientDeletion}
          />
        ))} 
          </>) : (
            <>
              <h2 className="font-black text-3xl text-center">
                No patients registered
              </h2>
              <p className="text-xl mt-5 text-center mb-10">
                Start by adding patients {""}
                <span className="text-indigo-600 font-bold"> and they will appear here</span>
              </p>
            </>
          )} 
  </div>
  )
}

export default PatientList