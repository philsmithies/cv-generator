import React, { useState } from 'react';
import PersonalDetails from './Components/PersonalDetails';
import WorkExperience from './Components/WorkExperience'
import './App.css';

const App = () => {

  const [state, setState]  = useState({
    fullName: '',
    role: '',
    email: '',
    location: '',
    bio: '',
    addWorkExperience: false
  })

  const handleChange = (e) => {
   const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    })
  }

  const addWork = (e) => {
    setState({
      ...state,
      addWorkExperience: true
    })
    console.log(state.addWorkExperience)
  }


  return (
    <div className="App">
      <h1>CV Generator</h1>
       <form>
        <input type="text" 
        name="fullName" 
        placeholder="John Smith" 
        onChange={handleChange}
        />
        <input type="text" 
        name="role" 
        placeholder="Software Developer" 
        onChange={handleChange}
        />
        <input type="text" 
        name="email" 
        placeholder="Email" 
        onChange={handleChange}
        />
        <input type="text" 
        name="location" 
        placeholder="London, UK" 
        onChange={handleChange}
        />
        <input type="text" 
        name="bio" 
        height="300px"
        placeholder="Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim. Nostrud ex aute laborum ea irure amet ea ipsum ut non minim anim nisi." 
        onChange={handleChange}
        />
      </form>
      <h1>Personal Details:</h1>
      <PersonalDetails 
        fullName={state.fullName}
        role={state.role}
        email={state.email}
        location={state.location}
        bio={state.bio}
      />
      <h1>Work Experience</h1>
      {state.addWorkExperience === false ? <button onClick={addWork}>Add Work</button> : ""} 
      {state.addWorkExperience === true ? "Adding the work in the form" : ""} 
      <WorkExperience />
    </div>
  );
}

export default App;
