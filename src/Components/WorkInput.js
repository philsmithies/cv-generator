import { useState } from "react";

const WorkInput = ({ addWork }) => {
  const [state, setState] = useState({
    position: "Position",
    company: "Company",
    startDate: "From",
    endDate: "To",
  });

  const handleSubmit = (e) => {
    const value = e.target.value;
    e.preventDefault();
    addWork(state);
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
      <input name="position" type="text" placeholder={state.position} onChange={handleChange}/>
      <input name="company" type="text" placeholder={state.company} onChange={handleChange}/>
      <input name="startDate" type="text" placeholder={state.startDate}  onChange={handleChange}/>
      <input name="endDate" type="text" placeholder={state.endDate} onChange={handleChange}/>
      <button type="submit">Add</button>
    </form>
  );
};

export default WorkInput;
