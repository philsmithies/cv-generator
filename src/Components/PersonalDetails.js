const PersonalDetails = (props) => {
  return(
    <div>
      <p>Full name:{props.fullName}</p>
      <p>Role:{props.role}</p>
      <p>Email:{props.email}</p>
      <p>Location:{props.location}</p>
      <p>Bio:{props.bio}</p>
    </div>
  ) 
}

export default PersonalDetails