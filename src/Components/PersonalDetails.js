import React, { useState } from 'react';

const PersonalDetails = () => {
  const [state, setState]  = useState({
    fullName: '',
    role: '',
    email: '',
    location: '',
    bio: '',
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
    <form>
        <input type="text" 
        name="fullName" 
        placeholder="John Smith" 
        onChange={handleChange}
        />
        <input type="text" 
        name="role" 
        placeholder="Software Developer" 
        onChange={handleChange}
        />
        <input type="text" 
        name="email" 
        placeholder="Email" 
        onChange={handleChange}
        />
        <input type="text" 
        name="location" 
        placeholder="London, UK" 
        onChange={handleChange}
        />
        <input type="text" 
        name="bio" 
        height="300px"
        placeholder="Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim. Nostrud ex aute laborum ea irure amet ea ipsum ut non minim anim nisi." 
        onChange={handleChange}
        />
    </form>
    <div>
    <br/>
    <p>Hey your full name name is:{state.fullName}</p>
    <p>Hey your role is:{state.role}</p>
    </div>
    </div>
  ) 
}

export default PersonalDetails