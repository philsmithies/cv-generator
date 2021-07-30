import { useState } from "react";

const EducationInput = ({ addEducation }) => {
  const [state, setState] = useState({
    school: "School",
    city: "City",
    subject: "Subject",
    startDate: "From",
    endDate: "To",
  });

  const handleSubmit = (e) => {
    const value = e.target.value;
    e.preventDefault();
    addEducation(state);
    setState({
      ...state,
      [e.target.name]: value
    })
  };

  const handleChange = (e) => {
    const value = e.target.value;
     setState({
       ...state,
       [e.target.name]: value
     })
   }

  return (
    <form onSubmit={handleSubmit}>
      <input name="school" type="text" placeholder={state.school} onChange={handleChange}/>
      <input name="city" type="text" placeholder={state.city} onChange={handleChange}/>
      <input name="subject" type="text" placeholder={state.subject} onChange={handleChange}/>
      <input name="startDate" type="text" placeholder={state.startDate} onChange={handleChange}/>
      <input name="endDate" type="text" placeholder={state.endDate} onChange={handleChange}/>
      <button type="submit">Add</button>
    </form>
  );
};

export default EducationInput;
