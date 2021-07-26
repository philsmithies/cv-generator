import { useState } from "react";

const WorkInput = ({ addWork }) => {
  const [state, setState] = useState({
    company: "Company",
    startDate: "Start Date",
    endDate: "End Date",
    description: "Description",
  });

  const handleSubmit = (e) => {
    const value = e.target.value;
    e.preventDefault();
    addWork(state.company);
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
      <input name="company" type="text" placeholder={state.company} onChange={handleChange}/>
      <input name="startDate" type="text" placeholder={state.startDate} />
      <input name="endDate" type="text" placeholder={state.endDate} />
      <input name="description" type="text" placeholder={state.description} />
      <button type="submit">Add</button>
    </form>
  );
};

export default WorkInput;
