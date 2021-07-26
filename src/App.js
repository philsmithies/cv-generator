import React, { useState } from 'react';
import PersonalDetails from './Components/PersonalDetails';
import PersonalInput from './Components/PersonalInput';
import Bio from './Components/Bio';
import WorkExperience from './Components/WorkExperience'
import WorkDetails from './Components/WorkDetails'
import WorkInput from './Components/WorkInput'
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
    description: 'Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim. Nostrud ex aute laborum ea irure amet ea ipsum ut non minim anim nisi.',
  })

  const [elements, setElements] = useState([
    {
      company: 'pizza hut',
      startDate: '12/02',
      endDate: '13/04',
      description: 'was the leader of pizzas',
      position: 'manager'
    },
    {
      company: 'monoprix',
      startDate: '15/02',
      endDate: '1/04',
      description: 'general manager',
      position: 'king'
    },
    {
      company: 'monoprix',
      startDate: '15/02',
      endDate: '1/04',
      description: 'general manager',
      position: 'king'
    }
  ])

  // const AddWork = () => {
  //   setElements([...elements, <WorkInput deleteWork={deleteWork}/>])
  // }

  const deleteWork = (index) => {
    const newWorks = [...elements]
    newWorks.splice(index, 1)
    setState.elements(newWorks)
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
      {/* {elements} */}
      {/* <button onClick={AddWork}>Add Work</button> */}
      <WorkInput deleteWork={deleteWork} />
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
    />
    {elements.map((work, index) => (
        <WorkDetails 
        company={work.company}
        position={work.position}
        startDate={work.startDate}
        description={work.description}
        endDate={work.endDate}
        />
      ))}
    </div>
    </div>
  );
}

export default App;



