const Input = (props) => {

    const {className, id, name, placeholder, label, column, svg, margLeft, onChange} = props

    return (
        <div className="row mb-3">
            <div className={margLeft}>{svg}</div>
           <label htmlFor={id} className="col-sm-1 col-form-label"> {label}</label>
           <div className={column}>
             <input className={className} id={id} name={name} placeholder={placeholder} onChange={onChange}/>
           </div>
         </div>
    )
}

export default Input;