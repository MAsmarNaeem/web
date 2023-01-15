
import style from "/styles/style.module.css";
const Footer=()=>
{
    return(
     
        <div className={style.footer}>
            <div className="row justify-content-evenly  mt-5">
                <div className="col-md-3 mt-5">
                  
                    <h4>HypeIndustry</h4>
                                 <p>Hypeindustry concept</p>
                                 <p>Buying Guide</p>
                                 <p>Selling Guide</p>
                </div>
                <div className="col-md-2 mt-5">
                    <h4>Hype Offers</h4>
                    <p>Footear</p>
                    <p>Apparel</p>
                    <p>Accessories</p>
                </div>
      <div className="col-md-2 mt-5">
        <h4>Shipping</h4>
        <p>Shipping for buyers</p>
        <p>Shipping for Sellers</p>
      </div>
      <div className="col-md-3">
        <h4>Contact us</h4>
        <p><a className="text-danger" href="shipping@hypeindustry.com">shipping@hypeindustry.com</a></p>
          <p><a className="text-danger" href="sales@hypindustry.com">sales@hypindustry.com</a></p>
      </div>
            
            </div>

        </div>
       
    )
}
export default Footer