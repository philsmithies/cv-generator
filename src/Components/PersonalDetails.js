import React, { useState } from 'react';

const PersonalDetails = () => {
  const [name, setName]  = useState('John')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitted')
  }

  return(
    <form onSubmit={handleSubmit}>
    <div>{name}</div>
    <button type="submit">
      Submit
    </button>
    </form>
  ) 
}

export default PersonalDetails