function Navbar(){
    return( <>
      <div>
    <nav className="navbar navbar-expand-lg  position-fixed top-0 mx-auto w-100 border-bottom d-flex align-item-center  bg-white">
  <div className="container-lg ">
    <a className="navbar-brand fw-semibold fs-6 " href="#" style={{letterSpacing: "3px"}}>NIXiMIST</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mx-auto text-center mb-2 d-flex gap-3 mb-lg-0">
      
        <li className="nav-item">
          <a className="nav-link" href="#">PRODUCTS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">INGREDIENTS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">ROUTINE</a>
        </li>
          <li className="nav-item">
          <a className="nav-link" href="#">REViEWS</a>
        </li>
          <li className="nav-item">
          <a className="nav-link" href="#">FAQ</a>
        </li>
      </ul>
      <span className="navbar-text">
       <button className= "btn btn-dark text-white rounded-0 px-4 py-3">SHOP NOW</button>
      </span>
    </div>
  </div>
</nav>
   </div>
     </>)
}
export default Navbar;