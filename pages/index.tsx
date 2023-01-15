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

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar
        data="login"
        b1="Hypeindustry"
        b2="Hype Offers"
        b3="Shipping"
        b4="Seller Request Form"
      />

      <div className="row  justify-content-evenly  mt-2">
        <div className="col-md-6 text-right mt-5">
          <h2>New MarketPlace that allow you to buy in bulk</h2>

          <p>
            Hypeindustry is a one-of-a-kind Platform+Marketplace offering
            Bulk/Wholesale goods from Stores, Boutiques,Wholesalers & Resellers
            for the Footwear,Apparel & Accessory industry.
          </p>
        </div>
        <div className="col-md-5 mt-5">
          {/* <img src="vector.png" className="img-fluid" alt="" /> */}
          <Image src="/vector.png" height="250" alt="Image" width="500" ></Image>
        </div>
      </div>
      {/* next section staart */}
      <div className="row justify-content-evenly  mt-5">
        <div className="col-md-5">
          {/* <img src="agri.png" className="img-fluid" alt="" /> */}
          <Image src="/agri.png" height="250" alt="Image" width="600" ></Image>
        </div>
        <div className="col-md-5 text-right">
          <h3>Why HypeIndustry and what is it</h3>
          <p>
            Hypeindustry is a one-of-a-kind Platform + Marketplace offering
            Bulk/Wholesale goods from Stores, Boutiques, Wholesalers & Resellers
            for the Footwear, Apparel & Accessory industry! Basically a new
            marketplace that allows you to buy in bulk (only) footwear, apparel
            etc...
          </p>
        </div>
      </div>

      <div className="row mt-5 justify-content-evenly">
        <div className="col-md-8 mt-4">
          <p>
            Buy cheaper because of the bulk volume discount and resell worldwide
            to make a small margin and keep the volume and recurrence active!
            The key to make your money fast .
          </p>
          <p>
            <a className="text-decoration-none" href="selling.tsx">
              Read more ...
            </a>{" "}
          </p>
        </div>
        <div className="col-md-4">
          {/* <img src="fac.png" className="img-fluid" alt="" /> */}
          <Image src="/fac.png" height="250" alt="Image" width="400" ></Image>
        </div>
      </div>
  {/* new section*/}
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

           {/* new */}

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
           <div className="col-md-5 mt-3 ">
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

           <div className="text-center">
            <Button data="Learn more "  className="bg-success rounded-pill"  />
           </div>
          
         </div>

         {/* new section start */}
         <div className="row  justify-content-evenly">
          <div className="col-md-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-truck-front" viewBox="0 0 16 16">
  <path d="M5 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-6-1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Z"/>
  <path fill-rule="evenodd" d="M4 2a1 1 0 0 0-1 1v3.9c0 .625.562 1.092 1.17.994C5.075 7.747 6.792 7.5 8 7.5c1.208 0 2.925.247 3.83.394A1.008 1.008 0 0 0 13 6.9V3a1 1 0 0 0-1-1H4Zm0 1h8v3.9c0 .002 0 .001 0 0l-.002.004a.013.013 0 0 1-.005.002h-.004C11.088 6.761 9.299 6.5 8 6.5s-3.088.26-3.99.406h-.003a.013.013 0 0 1-.005-.002L4 6.9c0 .001 0 .002 0 0V3Z"/>
  <path fill-rule="evenodd" d="M1 2.5A2.5 2.5 0 0 1 3.5 0h9A2.5 2.5 0 0 1 15 2.5v9c0 .818-.393 1.544-1 2v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V14H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a2.496 2.496 0 0 1-1-2v-9ZM3.5 1A1.5 1.5 0 0 0 2 2.5v9A1.5 1.5 0 0 0 3.5 13h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 12.5 1h-9Z"/>
</svg>
  <h2>Shipping for Buyers</h2>
  <p>All of our items are being shipped from several warehouses/stores in the USA and worldwide,
     and usually ships within 24 H to 5 business days depending on the seller’s shipping time.</p>


          </div>
          <div className="col-md-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
</svg>
          <i className="bi bi-truck"></i>
            <h2>Shipping for seller</h2>
            <p>Once you have approved the purchase, you can request for your labels by email at: shipping@hypeindustry.com! Make sure to include: 
Buyer’s details...</p>
          </div>
         </div>

        
      <Footer/>
      {/* container end */}
    </div>
  );
}
