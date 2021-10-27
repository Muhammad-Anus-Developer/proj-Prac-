import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css';


const Buttons = (props) =>{
    return(
        <button className="box spread-distance-box-shadow bg-white px-3 py-3 size fw-bold" style={{height:"65px", width:"100%"}} > <span className="text-dark"> {props.name}</span> </button>
    )
}
export default Buttons