import supabase from '../../config/supabaseClient';
import { useState, useEffect } from 'react';

export default function StudentSignUpTab() {
  const [fetchError, setFetchError] = useState(null);
  const [students, setStudents] = useState(null);

  const [newFirstName, setNewFirstName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [newCountryOrigin, setNewCountryOrigin] = useState('');
  const [newCountryResiding, setNewCountryResiding] = useState('');
  const [newGender, setNewGender] = useState('');
  const [newAge, setNewAge] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newInstagramId, setNewInstagramId] = useState('');
  const [newWhatsappNum, setNewWhatsappNum] = useState('');
  const [newTelegramNum, setNewTelegramNum] = useState('');
  const [newLanguageOne, setNewLanguageOne] = useState('');
  const [newFluencyOne, setNewFluencyOne] = useState('');
  const [newLanguageTwo, setNewLanguageTwo] = useState('');
  const [newFluencyTwo, setNewFluencyTwo] = useState('');
  const [newLanguageThree, setNewLanguageThree] = useState('');
  const [newFluencyThree, setNewFluencyThree] = useState('');
  const [newAvailabilityOne, setNewAvailabilityOne] = useState('');
  const [newAvailabilityTwo, setNewAvailabilityTwo] = useState('');
  const [newPreviousStudent, setNewPreviousStudent] = useState(false);
  const [newHearAboutUs, setNewHearAboutUs] = useState('');
  const [newReferred, setNewReferred] = useState(false);
  const [newReferredByName, setNewReferredByName] = useState('');
  const [newReferredByEmail, setNewReferredByEmail] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
      const { data, error } = await supabase.from('students').select();

      if (error) {
        setFetchError('Could not fetch the students');
        setStudents(null);
        console.log(error);
      }

      if (data) {
        setStudents(data);
        setFetchError(null);
      }
    };

    fetchStudents();
  }, []);

  const idGenerator = async () => {
    const { data, error } = await supabase.from('students').select();
    
  }

  const handleInsert = async () => {
    // Insert the new student data into the database
    const { data, error } = await supabase.from('students').insert([
      {
        first_name: newFirstName,
        last_name: newLastName,
        country_origin: newCountryOrigin,
        country_residing: newCountryResiding,
        gender: newGender,
        age: newAge,
        email: newEmail,
        instagram_id: newInstagramId,
        whatsapp_num: newWhatsappNum,
        telegram_num: newTelegramNum,
        language_one: newLanguageOne,
        fluency_one: newFluencyOne,
        language_two: newLanguageTwo,
        fluency_two: newFluencyTwo,
        language_three: newLanguageThree,
        fluency_three: newFluencyThree,
        availability_one: newAvailabilityOne,
        availability_two: newAvailabilityTwo,
        previous_student: newPreviousStudent,
        hear_about_us: newHearAboutUs,
        referred: newReferred,
        referred_by_name: newReferredByName,
        referred_by_email: newReferredByEmail,
      },
    ]);

    if (error) {
      console.error('Error inserting data:', error);
    } else {
      console.log('Data inserted successfully:', data);
      setStudents();
    }
  };
  return (
    <div className='student-sign-up'>
      {fetchError && <p>{fetchError}</p>}
      {students && (
        <div className='students'>
          {students.map((student) => (
            <p key={student.student_id}>{student.first_name}</p>
          ))}
        </div>
      )}
      <div>
        <h2>Add New Student:</h2>
        {Object.keys({
          newFirstName,
          newLastName,
          newCountryOrigin,
          newCountryResiding,
          newGender,
          newAge,
          newEmail,
          newInstagramId,
          newWhatsappNum,
          newTelegramNum,
          newLanguageOne,
          newFluencyOne,
          newLanguageTwo,
          newFluencyTwo,
          newLanguageThree,
          newFluencyThree,
          newAvailabilityOne,
          newAvailabilityTwo,
          newPreviousStudent,
          newHearAboutUs,
          newReferred,
          newReferredByName,
          newReferredByEmail,
        }).map((columnName) => (
          <label key={columnName}>
            {columnName.replace('new', '')}:
            <input
              type='text'
              value={eval(columnName)} // Using eval to get the value of the state variable
              onChange={(e) => {
                const value = e.target.value;
                switch (columnName) {
                  case 'newPreviousStudent':
                  case 'newReferred':
                    eval(`set${columnName.charAt(0).toUpperCase()}${columnName.slice(1)}(value === 'true')`);
                    break;
                  default:
                    eval(`set${columnName.charAt(0).toUpperCase()}${columnName.slice(1)}(value)`);
                }
              }}
            />
          </label>
        ))}
        <button onClick={handleInsert}>Submit</button>
      </div>
    </div>
  );
  
  
}
