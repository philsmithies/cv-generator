const PersonalInput = (props) => {

  return (
      <div>
        <input type="text" 
        name={props.name} 
        value={props.value}
        placeholder={props.placeholder} 
        onChange={props.onChange}
        />
      </div>
  )
}

export default PersonalInput