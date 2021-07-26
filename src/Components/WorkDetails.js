const WorkDetails = ({company, position, startDate, endDate, description, deleteWork, index}) => {
  return(
    <div>
      <h1>Work Details:</h1>
      <p>Company: {company}</p>
      <p>Position:{position}</p>
      <p>Start Date:{startDate}</p>
      <p>End Date:{endDate}</p>
      <p>Description:{description}</p>
      <button onClick={() => deleteWork(index)}>Remove</button>
    </div>
  ) 
}

export default WorkDetails