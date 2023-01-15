
import Navbar from "../Components/Navbar/Navbar"
import styles from "../styles/Home.module.css"
import Icons from "../Components/Icons/Icons"
import Button from "../Components/Button/Button"
import Footer from "../Components/Footer/Footer"
import Link from 'next/link'
const Buying=()=>
{
    return(
        <div className={styles.container}>
          <Navbar  data="login"
        b1="Hypeindustry"
        b2="Hype Offers"
        b3="Shipping"
        b4="Seller Request Form"/>

          
           {/* new section start */}
         <div className="row mt-4 justify-content-evenly">
        <div className="text-center">
          <div className="col-md-12">
          <h2 >Buying on Hypeindustry is simple!</h2>
          </div>
       
        </div>
          
          <div className="col-md-5 mt-3">
            <div className="row">
              <div className="col-md-1">
                <Icons/>
              </div>
              <div className="col-md-9">
              <p>Create a buyer account / profile, with all required fields:
               Full name, Company name or Store Name, Address, Credit Card info etc...</p>
              </div>
            </div>
          </div>
           <div className="col-md-5 mt-3">
           <div className="row">
              <div className="col-md-1">
                <Icons/>
              </div>
              <div className="col-md-9">
              <p>Create a buyer account / profile, with all required fields:
               Full name, Company name or Store Name, Address, Credit Card info etc...</p>
              </div>
            </div>
           </div>
           </div>
           {/* new section start */}
         <div className="row mt-4 justify-content-evenly">
        <div className="text-center">
          <div className="col-md-12">
         
          </div>
       
        </div>
          
          <div className="col-md-5 mt-3">
            <div className="row">
              <div className="col-md-1">
                <Icons/>
              </div>
              <div className="col-md-9">
              <p>Create a buyer account / profile, with all required fields:
               Full name, Company name or Store Name, Address, Credit Card info etc...</p>
              </div>
            </div>
          </div>
           <div className="col-md-5 mt-3">
           <div className="row">
              <div className="col-md-1">
                <Icons/>
              </div>
              <div className="col-md-9">
              <p>Create a buyer account / profile, with all required fields:
               Full name, Company name or Store Name, Address, Credit Card info etc...</p>
              </div>
            </div>
           </div>
           </div>
           {/* new section start */}
         <div className="row mt-4 justify-content-evenly">
        <div className="text-center">
          <div className="col-md-12">
         
          </div>
       
        </div>
          
          <div className="col-md-5 mt-3">
            <div className="row">
              <div className="col-md-1">
                <Icons/>
              </div>
              <div className="col-md-9">
              <p>Create a buyer account / profile, with all required fields:
               Full name, Company name or Store Name, Address, Credit Card info etc...</p>
              </div>
            </div>
          </div>
           <div className="col-md-5 mt-3">
           <div className="row">
              <div className="col-md-1">
                <Icons/>
              </div>
              <div className="col-md-9">
              <p>Create a buyer account / profile, with all required fields:
               Full name, Company name or Store Name, Address, Credit Card info etc...</p>
              </div>
            </div>
           </div>
           </div>

           <div className="row text-center">
            <Button data="Read more" className="bg-success rounded-pill"/>
           </div>

          <Footer/>

        {/* container end */}
        </div>
        
    )
}
export default Buying