const WorkInputPreview = ({company, position, startDate, endDate, description, deleteWork, index}) => {
  return(
    <div class="workinputpreview">
        <p class="companytext">{company}</p>
        <p>{position}</p>
        <button onClick={() => deleteWork(index)}>X</button>
  </div>
  )
}

export default WorkInputPreview