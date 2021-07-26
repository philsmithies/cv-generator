import PersonalInput from './PersonalInput';

const WorkExperience = (props) => {
  return(
    <div>
      <PersonalInput name="company" placeholder="Company" />
      <PersonalInput name="position" placeholder="Position" />
      <PersonalInput name="startDate" placeholder="Start Date" />
      <PersonalInput name="endDate" placeholder="End Date" />
      <PersonalInput name="description" placeholder="description" />
      <button>Remove</button>
  </div>
  )
}

export default WorkExperience