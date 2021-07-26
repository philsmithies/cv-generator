import { useState } from "react"

const WorkInput = () => {

  const [state, setState] = useState({

  })

  return(
    <div>
      <input type="text" placeholder="company"/>
      <input type="text" placeholder="start date"/>
      <input type="text" placeholder="end date"/>
      <input type="text" placeholder="description"/>
      <button>Remove</button>
    </div>
  )
}

export default WorkInput