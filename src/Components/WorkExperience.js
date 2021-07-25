import PersonalInput from './PersonalInput';

const handleChange = (e) => {

 }

const WorkExperience = (props) => {

  return(
    <div>
      <PersonalInput name="company" placeholder="Company" onChange={handleChange}/>
      <PersonalInput name="position" placeholder="Position" onChange={handleChange}/>
      <PersonalInput name="startDate" placeholder="Start Date" onChange={handleChange}/>
      <PersonalInput name="endDate" placeholder="End Date" onChange={handleChange}/>
      <PersonalInput name="description" placeholder="description" onChange={handleChange}/>
  </div>
  )
}

export default WorkExperience