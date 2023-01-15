
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

const Seller=()=>
{
    return(
     <div  className={styles.container}>
      <Navbar
             
               data="login"
               b1="Hypeindustry"
               b2="Hype Offers"
               b3="Shipping"
               b4="Seller Request Form"/>

{/* //  new */}
<div  className="mt-5 ">
    <h3>How do i get my Prepaid Shipping LABELS?</h3>
    <p>Once you have approved the purchase, you can request for your labels by email at shipping@hypeindustry.com

    </p>
    <p>We take care of all customs paperwork for you , so you can sleep well at night!</p>

    <ul>
        <li>Buyer’s details in full, name , full address and invoice number.</li>
        <li>Box count and if possible boxes dimension.</li>
        <li>Total pairs shipped, no need for weight.</li>
    </ul>
    <p>Labels are then emailed to you within 24h/48h. You can drop the boxes at an authorized shipper or request a pick-up. We can either schedule the pick-up for you,
         during your opening hours, or,  you can request the pick-up yourself at your own discretion!</p>
</div>
       
       <div>
        <h4>How do I pack the items I have SOLD?</h4>
        <p>
        This process is very easy! We suggest using standard Nike or Adidas boxes (29x19x16 or 30x20x15 inches), and pack 12 or 13 prs per box. If you unfold boxes properly you may be able to fit an extra pair or two! Check out this video we found (we are not in that video or know anyone in this video) it is a tutorial for sellers who do not know how to flatten shoe boxes.
         With this method you can pack 14 to 15 pairs versus 12 pairs per box:
        </p>
          <div className="text-center mt-5">
          {/* <img   src="as.png"  className="img-fluid" alt="" /> */}
          <Image src="/as.png" height="250" alt="Image" width="350" ></Image>
          </div>
         
       </div>
   <Footer/>
{/* end */}
     </div>

 
  
    )
}
export default Seller