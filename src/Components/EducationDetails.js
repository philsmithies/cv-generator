const EducationDetails = ({school, subject, startDate, endDate, description, deleteWork, index}) => {
  return(
    <div class="workwrapper">
      <strong>School: {school}</strong>
      <p>Subject: {subject}</p>
      <p>Start Date: {startDate}</p>
      <p>End Date: {endDate}</p>
      <p>Description: {description}</p>
      {/* <button onClick={() => deleteWork(index)}>Remove</button> */}
    </div>
  ) 
}

export default EducationDetails