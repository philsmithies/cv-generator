import React, { useState } from 'react';

const WorkExperience = () => {
  const [state, setState]  = useState({
    position: '',
  })

  const handleChange = (e) => {
    const value = e.target.value;
     setState({
       ...state,
       [e.target.name]: value
     })
   }

  return(
    <div>
      <input type="text" 
      name="position" 
      placeholder="Previous Position"
      onChange={handleChange}
      />
      <p>Previous Position:{state.position}</p>
    </div>
  )
}

export default WorkExperience