const Bio = (props) => {

  return (
      <textarea id="textarea" 
        name={props.name} 
        placeholder="Bio"
        onChange={props.onChange} 
      />
  )
}

export default Bio