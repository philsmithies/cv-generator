const PersonalDetails = (props) => {
  return(
    <div>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
      <p>Location: {props.location}</p>
      <p>Bio: {props.bio}</p>
    </div>
    
  ) 
}

export default PersonalDetails