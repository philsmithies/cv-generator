const WorkExperience = (props) => {

  return(
    <input type="text" 
    name={props.name} 
    value={props.value}
    placeholder={props.placeholder} 
    onChange={props.onChange}
    />
  )
}

export default WorkExperience