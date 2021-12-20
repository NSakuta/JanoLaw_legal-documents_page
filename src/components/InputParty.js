const InputParty = (props) => {

    const {className, type, id, name, placeholder, label, column, svg} = props

    return (
        <div className="row mb-3">
            {svg}
           <label htmlFor={id} className="col-sm-1 col-form-label">{label}</label>
           <div className={column}>
             <input type={type} className={className} id={id} name={name} placeholder={placeholder}/>
           </div>
         </div>
    )
}

export default InputParty;