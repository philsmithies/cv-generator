const EducationInputPreview = ({school, subject, startDate, endDate, deleteEducation, index}) => {
  return(
    <div class="workinputpreview">
      <div>
      <p class="companytext">{school}</p>
        <p>{subject}</p>
        <p>{startDate} to {endDate}</p>
      </div>
        <button onClick={() => deleteEducation(index)}>X</button>
  </div>
  )
}

export default EducationInputPreview