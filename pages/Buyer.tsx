
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../Components/Navbar/Navbar";
import style from "../styles/style.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../Components/Button/Button";
import Icons from "../Components/Icons/Icons";
import Footer from "../Components/Footer/Footer"
import Link from 'next/link'

const Buyer=()=>
{
    return(

      <div className={styles.container}>
                    <Navbar 
            data="login"
            b1="Hypeindustry"
            b2="Hype Offers"
            b3="Shipping"
            b4="Seller Request Form"/>

            <div className="row mt-5 justify-content-evenly">
                <div className="col-md-5">
                    <h3>Shipping for Buyers</h3>
                    <p>All of our items are being shipped from several warehouses/stores in the USA and worldwide, 
                        and usually ships within 24h to 5 business days depending on the seller’s shipping time.</p>
                        <p>We take care of all customs paperwork for you , so you can sleep well at night!</p>
                        <p>Sellers: Just pack the shoes, tape the box(es)properly with lots of tape,
                             request your labels via email, and relax! The rest will be taken care of ☺</p>
                             <p>Buyers: Don’t worry, we will make sure: a proper value, tariff code and description are entered and that no problems
                                 occur from the time packages leave the country and arrive in your country to clear customs!</p>
                
                </div>
                <div className="col-md-3">

                    <Image src="/end.png" height="400" alt="Image" width="400" ></Image>
                
             </div> 
            </div>
            <div className="row justify-content-evenly">
            <div className="col-md-4  ">
                   <img src="bs.png" className="img-fluid" alt="" />
                </div>
            <div className="col-md-4  ">
                    <h3>How much does  Shipping cost</h3>
                    <p>The default shipping cost for sellers & buyers on the platform is $2.50/pair for domestic shipments within the USA, and $10-$12.50/pair for international express shipments. That will vary based on the seller & buyer location. Of course, shipping cost are pretty low,
                         as we are dealing with bulk purchases, resulting in cost-effective shipping.</p>
                </div>
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
     
     <Footer/>

{/* container end */}
      </div>
    )
}
export default Buyer