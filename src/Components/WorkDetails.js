const WorkDetails = ({company, position, startDate, endDate, description, deleteWork, index}) => {
  return(
    <div class="workwrapper">
      <strong>Company: {company}</strong>
      <p>Position: {position}</p>
      <p>Start Date: {startDate}</p>
      <p>End Date: {endDate}</p>
      <p>Description: {description}</p>
      {/* <button onClick={() => deleteWork(index)}>Remove</button> */}
    </div>
  ) 
}

export default WorkDetails