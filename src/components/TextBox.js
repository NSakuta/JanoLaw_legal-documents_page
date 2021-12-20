const TextBox = () => {
    return (
        <div className="h6 pt-4 pb-3 mb-4 ">
            <div className="d-flex justify-content-between">
            <div className="flex-grow-1">
                <span className="badge  " style={{backgroundColor: "#1F746A"}}>Preambula 1</span>
                <a href="'" className="p-0 m-0 ms-1"><i className="fas fa-level-down-alt fa-sm" style={{color: "#A89F9F"}}></i></a>
            </div>
            <a href="/" className="nav-link  p-0 m-0 " aria-current="page" title="Home" data-bs-toggle="tooltip" data-bs-placement="right">
                <i className="fas fa-pen fa-sm colorViolet"></i>

            </a>
            <a href="/" className="nav-link  p-0 m-0 ms-2" aria-current="page" title="Home" data-bs-toggle="tooltip" data-bs-placement="right">
                <i className="fas fa-link fa-sm colorViolet"></i> </a>
            </div>
            <div className="p-2 mt-2 border border-dark rounded-3">The Executive Summary is used to give a high-level summation of the Business to a potential investor or lender. As the title suggests, it is a ....</div>
        </div>
    )
}

export default TextBox;