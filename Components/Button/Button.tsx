
import "bootstrap/dist/css/bootstrap.min.css"
type props=
{
    data:string,
    className:string,
     
}

const Button=(props:props)=>
{
    return(
        <div>
              <button className={props.className}>{props.data}</button>
        </div>
       
    )
}
export default Button