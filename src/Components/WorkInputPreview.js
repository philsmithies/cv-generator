const WorkInputPreview = ({company, position, startDate, endDate, description, deleteWork, index}) => {
  return(
    <div class="workinputpreview">
        <div>
        <p class="companytext">{company}</p>
        <p>{position}</p>
        <p>{startDate} to {endDate}</p>
        </div>
        <button onClick={() => deleteWork(index)}>X</button>
  </div>
  )
}

export default WorkInputPreview