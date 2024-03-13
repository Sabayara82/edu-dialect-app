import supabase from '../../config/supabaseClient';
import { useState, useEffect } from 'react';

export default function VolunteerSignUpTab() {
    const [fetchError, setFetchError] = useState(null);
    const [volunteer, setVolunteers] = useState(null);
    const [volunteer_id, setVolID] = useState(null);


    const [volId, setVolId] = useState(null);
    const [volFirstName, setVolFirstName] = useState('');
    const [volLastName, setVolLastName] = useState('');
    const [volGender, setVolGender] = useState('');
    const [volAge, setVolAge] = useState(null);
    const [volEmail, setVolEmail] = useState('');
    const [volInstagramId, setVolInstagramId] = useState('');
    const [volWhatsappNum, setVolWhatsappNum] = useState('');
    const [volEducationLevel, setVolEducationLevel] = useState('');
    const [volOtherLanguages, setVolOtherLanguages] = useState(false);
    const [volOtherLanguageOne, setVolOtherLanguageOne] = useState('');
    const [volOtherLanguageTwo, setVolOtherLanguageTwo] = useState('');
    const [volOtherLanguageThree, setVolOtherLanguageThree] = useState('');
    const [volAvailabilityOne, setVolAvailabilityOne] = useState('');
    const [volAvailabilityTwo, setVolAvailabilityTwo] = useState('');
    const [volPreviousVol, setVolPreviousVol] = useState(false);
    const [volHearAboutUs, setVolHearAboutUs] = useState('');

  useEffect(() => {
    const fetchVolunteers = async () => {
      const { data, error } = await supabase.from('volunteer').select();

      if (error) {
        console.error('Could not fetch volunteer:', error);
        setVolunteers(null);
      }

      if (data) {
        setVolunteers(data);
      }
    };

    fetchVolunteers();
      
  }, []);

  const setVolunteerID = async () => {
    const { data, error } = await supabase.from('volunteer').select('volunteer_id');

    if (data = null){
      const { data, error } = await supabase.from('volunteer').insert([
        {
          volId: 1,
        },]);   
    }else if(error){
      console.error('Could not fetch volunteer:', error);
      setVolID(null);
    }else{
      volId = volunteer_id + 1
    }

    setVolunteerID()

  }

  const handleVolunteerInsert = async () => {
    // Insert the new volunteer data into the database
    const { data, error } = await supabase.from('volunteer').insert([
      {
        vol_id: volId,
        first_name: volFirstName,
        last_name: volLastName,
        gender: volGender,
        age: volAge,
        email: volEmail,
        instagram_id: volInstagramId,
        whatsapp_num: volWhatsappNum,
        education_level: volEducationLevel,
        other_languages: volOtherLanguages,
        other_language_one: volOtherLanguageOne,
        other_language_two: volOtherLanguageTwo,
        other_language_three: volOtherLanguageThree,
        availability_one: volAvailabilityOne,
        availability_two: volAvailabilityTwo,
        previous_vol: volPreviousVol,
        hear_about_us: volHearAboutUs,
      },
    ]);

    if (error) {
      console.error('Error inserting volunteer data:', error);
    } else {
      console.log('Volunteer data inserted successfully:', data);
      setVolunteers();
    }
  };


  return (
    <div className='volunteer-sign-up'>
      {fetchError && <p>{fetchError}</p>}
      {volunteer && (
        <div className='volunteers'>
          {volunteer.map((volunteer) => (
            <p key={volunteer.vol_id}>{volunteer.first_name}</p>
          ))}
        </div>
      )}
      <div>
        <h2>Add New Volunteer:</h2>
        {Object.keys({
          volFirstName,
          volLastName,
          volGender,
          volAge,
          volEmail,
          volInstagramId,
          volWhatsappNum,
          volEducationLevel,
          volOtherLanguages,
          volOtherLanguageOne,
          volOtherLanguageTwo,
          volOtherLanguageThree,
          volAvailabilityOne,
          volAvailabilityTwo,
          volPreviousVol,
          volHearAboutUs,
        }).map((columnName) => (
          <label key={columnName}>
            {columnName.replace('vol', '').replace(/([A-Z])/g, ' $1').trim()}:
            <input
              type='text'
              value={eval(columnName)} // Using eval to get the value of the state variable
              onChange={(e) => {
                const value = e.target.value;
                switch (columnName) {
                  case 'volPreviousVol':
                  case 'volOtherLanguages':
                    eval(`set${columnName.charAt(0).toUpperCase()}${columnName.slice(1)}(value === 'true')`);
                    break;
                  default:
                    eval(`set${columnName.charAt(0).toUpperCase()}${columnName.slice(1)}(value)`);
                }
              }}
            />
          </label>
        ))}
        <button onClick={handleVolunteerInsert}>Submit</button>
      </div>
    </div>
  );
  
}
