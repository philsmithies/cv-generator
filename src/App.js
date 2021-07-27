import React, { useState } from 'react';
import PersonalDetails from './Components/PersonalDetails';
import PersonalInput from './Components/PersonalInput';
import Bio from './Components/Bio';
// import WorkExperience from './Components/WorkExperience'
import WorkDetails from './Components/WorkDetails'
import WorkInput from './Components/WorkInput'
import WorkInputPreview from './Components/WorkInputPreview'
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
      company: 'Deliveroo, London',
      startDate: '12/02/2020',
      endDate: '13/04/2021',
      description: 'I was the leader of pizzas',
      position: 'Product Manager'
    },
  ])


  const [education, setEducation] = useState([
    {
      company: 'Makers Academy, London',
      startDate: '29/03/2021',
      endDate: '18/06/2021',
      description: 'Course Student',
      position: 'Full Stack Web Development'
    },
  ])

  const addWork = (text) => {
    setElements([...elements, { company: text }])
    console.log(elements)
  }

  const deleteWork = (index) => {
    const newWorks = [...elements]
    newWorks.splice(index, 1)
    setElements(newWorks)
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
      <WorkInput addWork={addWork} handleChange={handleChange} />
      {elements.map((work, index) => (
        <WorkInputPreview 
        company={work.company}
        position={work.position}
        startDate={work.startDate}
        description={work.description}
        endDate={work.endDate}
        deleteWork={deleteWork}
        />
      ))}
      <h3>Education</h3>
      <WorkInput addWork={addWork} handleChange={handleChange} />
      {education.map((work, index) => (
        <WorkInputPreview 
        company={work.company}
        position={work.position}
        startDate={work.startDate}
        description={work.description}
        endDate={work.endDate}
        deleteWork={deleteWork}
        />
      ))}
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
    <h2 class="worktitle">Work Experience</h2>
    {elements.map((work, index) => (
        <WorkDetails 
        company={work.company}
        position={work.position}
        startDate={work.startDate}
        description={work.description}
        endDate={work.endDate}
        deleteWork={deleteWork}
        />
      ))}
    <h2 class="worktitle">Education</h2>
    {education.map((work, index) => (
        <WorkDetails 
        company={work.company}
        position={work.position}
        startDate={work.startDate}
        description={work.description}
        endDate={work.endDate}
        deleteWork={deleteWork}
        />
      ))}
    </div>
    </div>
  );
}

export default App;



