import React, { useState } from 'react';
import PersonalDetails from './Components/PersonalDetails';
import PersonalInput from './Components/PersonalInput';
import Bio from './Components/Bio';
import WorkExperience from './Components/WorkExperience'
import './App.css';

const App = () => {

  const [state, setState]  = useState({
    fullName: 'John Doe',
    role: 'Software Developer',
    email: 'john@doe.org',
    phone: 'phone',
    location: 'London,uk',
    bio: 'Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim. Nostrud ex aute laborum ea irure amet ea ipsum ut non minim anim nisi.',
    company: 'Big Shots',
    startDate: '02/01/20',
    endDate: '25/05/21',
    description: 'Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim. Nostrud ex aute laborum ea irure amet ea ipsum ut non minim anim nisi.'
  })

  const AddWork = () => {
    setState({
      elements: [...state.elements, <WorkExperience/>]
    })
  }

  const handleChange = (e) => {
    const value = e.target.value;
     setState({
       ...state,
       [e.target.name]: value
     })
   }
 
  return (
    <div>
    <div className="wrapper">
      <h1>CV Generator</h1>
      <h3>Personal Info:</h3>
      <PersonalInput name="fullName" placeholder={state.fullName} onChange={handleChange}/>
      <PersonalInput name="role" placeholder={state.role} onChange={handleChange}/>
      <PersonalInput name="email" placeholder={state.email} onChange={handleChange}/>
      <PersonalInput name="phone" placeholder={state.phone} onChange={handleChange}/>
      <PersonalInput name="location" placeholder={state.location} onChange={handleChange}/>
      <Bio name="bio" value={state.bio} onChange={handleChange}/>
      <h3>Work Experience</h3>
      {state.elements}
      <button onClick={AddWork}>Add Work</button>
    </div>
    <div class="previewCv">
    <h1>{state.fullName}: {state.role}</h1>
    <PersonalDetails 
      fullName={state.fullName}
      role={state.role}
      email={state.email}
      phone={state.phone}
      location={state.location}
      bio={state.bio}
      company={state.company}
      startDate={state.startDate}
      endDate={state.endDate}
      description={state.description}
    />
    </div>
    </div>
  );
}

export default App;



