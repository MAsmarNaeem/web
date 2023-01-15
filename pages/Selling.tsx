


import Navbar from "../Components/Navbar/Navbar";
import styles from "../styles/Home.module.css";
import Button from "../Components/Button/Button"
import style from "../styles/style.module.css"
import Footer from "../Components/Footer/Footer";
import Link from 'next/link'

const Selling=()=>
{
    return(
        <div className={styles.container}>
            <Navbar 
            data="login"
            b1="Hypeindustry"
            b2="Hype Offers"
            b3="Shipping"
            b4="Seller Request Form"/>

            {/* new */}
            <div className={style.change}>
        <div className="row  justify-content-evenly pt-5">
          <div className="col-md-4 ">
            <h3>Selling on HyperIndustry</h3>
          </div>
        </div>
  {/* new section */}
        <div className="row justify-content-evenly">
          <div className="col-md-6">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                 
                <Button   data="Become a seller" className="bg-danger"/>
                
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Creating a list
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Seller fees
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                
                  aria-disabled="true"
                >
                 Condition of items
                </a>
              </li>
            </ul>
     
          </div>
             <div className="row justify-content-evenly mt-3">
              <div className="col-md-10">
              
               <h2>How do I sell on HypeIndustry?</h2>
               <p>To ensure the quality and authenticity of all items on our marketplace, we only allow a select group of stores and sellers that have passed our verification process, to sell on our platform. We encourage you to request to become a seller by filling out all the required information.
                 We’ll notify you as soon as your request has been approved.</p>
                  <div>
                  <p>I requested to become a SELLER, how long will it take to get approved? </p>
                  </div>
                  <p>Can I share my seller privileges with others?</p>
                  <p>Can I create several Seller Accounts?</p>
                  <p>How do I become a seller if I have a store outside the USA?</p>
              </div>
             </div>
        </div>
      </div>
      {/* new section start */}

      <Footer/>

        </div>
    )

}
export default Selling