import Link from 'next/link'
import "bootstrap/dist/css/bootstrap.min.css"
type props=
{
    data:string,
    b1:string,
    b2:string,
    b3:string,
    b4:string,
    
}

const Navbar=(props:props)=>
{
  return(
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <img src="Frame 357.png"  className="img-fluid" alt="" />
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
       data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
       aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             <Link href="/Buyer"> shipping</Link>
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <Link href="/Selling"> Selling</Link>
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#"></a>name</li>
              <li><a className="dropdown-item" href="#"></a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#"></a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <Link href="/Seller"> Seller</Link>
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>

            </ul>
          </li>
         
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">{props.b4}</a>
          </li>
        </ul>
        <a className="navbar-brand" href="#">{props.data}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
       data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
       aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
        <form className="d-flex" role="search">
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}
export default Navbar