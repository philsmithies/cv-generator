const Bio = (props) => {

  return (
      <textarea id="w3review" name={props.name} value={props.value} onChange={props.onChange} />
  )
}

export default Bio