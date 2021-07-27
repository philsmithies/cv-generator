const EducationDetails = ({school, city, subject, startDate, endDate, deleteWork, index}) => {
  return(
    <div class="workwrapper">
      <strong>School: {school}</strong>
      <p>City: {city}</p>
      <p>Subject: {subject}</p>
      <p>From: {startDate}</p>
      <p>To: {endDate}</p>
    </div>
  ) 
}

export default EducationDetails