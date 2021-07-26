const Bio = (props) => {

  return (
      <textarea id="w3review" 
        name={props.name} 
        placeholder={props.value}
        onChange={props.onChange} 
      />
  )
}

export default Bio