const Bio = (props) => {

  return (
      <textarea id="w3review" 
        name={props.name} 
        placeholder="Bio"
        onChange={props.onChange} 
      />
  )
}

export default Bio