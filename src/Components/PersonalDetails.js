const PersonalDetails = (props) => {
  return(
    <div>
      <p>Email:{props.email}</p>
      <p>Phone:{props.phone}</p>
      <p>Location:{props.location}</p>
      <p>Bio:{props.bio}</p>

      <h1>Work Details:</h1>
      <p>Company: {props.company}</p>
      <p>Position:{props.position}</p>
      <p>Start Date:{props.startDate}</p>
      <p>End Date:{props.endDate}</p>
      <p>Description:{props.description}</p>

    </div>
    
  ) 
}

export default PersonalDetails