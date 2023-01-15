

import Navbar from "../Components/Navbar/Navbar";
import styles from "../styles/Home.module.css";
import Button from "../Components/Button/Button"
import style from "../styles/style.module.css"
import Footer from "../Components/Footer/Footer";
import Image from "next/image";
import Link from 'next/link'

const Hype=()=>
{
    return(
     <div className={styles.container}>
         <Navbar   data="login"
        b1="Hypeindustry"
        b2="Hype Offers"
        b3="Shipping"
        b4="Seller Request Form"/> 

        <div className="row mt-4 justify-content-evenly">
            <div className="col-md-6">
                <h3>Why HypeIndustry and what is it exactly?</h3>
                <p>Hypeindustry is a one-of-a-kind Platform + Marketplace offering Bulk/Wholesale goods from Stores, Boutiques, Wholesalers & Resellers for the Footwear, Apparel & Accessory industry! Basically a new marketplace that allows you to buy in bulk (only) footwear, apparel etc... Buy cheaper because of the bulk volume discount and resell worldwide to make a small margin
                     and keep the volume and recurrence active! The key to make your money fast.</p>
            </div>
            <div className="col-md-4">
                {/* <img src="new.png" alt="" /> <img src="n.png" alt="" /> */}
                <Image src="/new.png" height="350" alt="Image" width="450" ></Image>
               
            </div>
        </div>
        <div className="row mt-5  justify-content-evenly">

            <div className="col-md-4 mt-5">
                <div className="row">
                  

                    <div className="col-md-5">
                    <img src="Group 3031.png" alt="" />
                    </div>
                   
                </div>             
            </div>
            <div className="col-md-4 jusfy-content-left">

                 <img src="Frame 3031.png" alt="" />
                 <p>The idea of building a B2B marketplace, came to us a few years ago. Experiencing the process of buying and selling in bulk: footwear, apparel etc... since early 2002 we’ve encountered issues and restrictions , we also faced lots of question from sellers and buyers, shipping issues etc... But at the end of this journey, 
                    we are now providing answers and solutions that will help our network and partners!</p>
            </div>
        </div>
{/* new section start */}
      <div  className={style.change} >
      <div className="row justify-content-evenly mt-5">
           <div className="col-md-4">
            <h4>Always the same issue through the years </h4>
            <p>Many years have past of doing this bulk /wholesale trading business...

And it is always the same questions that came to us from our suppliers: “Hey can you move apparel? I have too much of this brand etc...”, or “Can you buy any accessories?”, “Can you move soccer shoes?”, “I received another shipment of this model ;can you buy more or help me move more now?” etc...

Well the answer was: “We don’t have any clients for those items, or let me ask around”</p>
           </div>
          <div className="col-md-4">
            <img src="Group.png" className="img-fluid"alt="" />
            
          </div>
        </div>
        <div className="row mt-5 justify-content-evenly">
            <div className="col-md-2 pt-5">
                
                <img src="earth.png" className="img-fluid" alt="" />
                
            </div>
            <div className="col-md-8 pt-5">
                <h3>Utopia</h3>
                <p>In a utopian marketplace, the best option would be to move a bunch of footwear/apparel or else, in bulk (one shot), to: another reseller, store or wholesaler somewhere on planet earth.
 
 Well, there are no B2B marketplaces anywhere that deal with: limited/ hyped goods, or a marketplace where stores (with no brand account) & reseller could buy from (in bulk prices footwear, apparel, accessories) without any boundaries or questions! So let's
  try and create that platform: so other store owners & resellers/wholesalers worldwide could profit from!</p>
            </div>
        </div>
      </div>

      <div className="row justify-content-evenly mt-4">
        <div className="col-md-5">
            <h3>Reality</h3>
            <p>Stores are flooded with quantities of the same items, so what do they do? They flip them on well known resell platform/marketplace; and we are all very familiar with these marketplaces... . How can you sell some Yeezys or Nike, when buyers/bidders are offering a price of 20-35% under retail? Simple, if you are
                 not the store yourself or a person who bought them at roughly 35% to 40% off retail... then forget it!</p>

        </div>
        <div className="col-md-4">
        <img src="Frame 1.png" className="img-fluid" alt="..."/>
     
        </div>

       

      </div>
    <div className="mt-5">
    <Footer/>
    </div>
   

      {/* main function end */}
     </div>


    )
}
export default Hype
