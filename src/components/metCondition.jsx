import "../App.css"
import { FaArrowLeft } from "react-icons/fa";
import logos from "../images/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import InputsHi from "./input";

const METCondition = () => {
    

    return (
        <div className="font back3">
            <div className="App grad">
                <FaArrowLeft className="wids" />
                <img className="wid" src={logos} />
            </div>

            <div className="App">
                <h1 style={{ color: "#505050" }} className="fw-bold my-5">MET Condition</h1>
            </div>

<form>
            <div className="row App">
                <div className="col-md-6">
                <label htmlFor="inp1" style={{ color: "#c9ada7", marginRight: "62%", paddingBottom: "1%" }}>Initial</label> <br />
                    <input className="px-3 py-2 mx-2 inpFoc" id="inp1" value="OMA" style={{ backgroundColor: "#e9edc9",marginBottom:"4%" }} disabled id="outlined-disabled" type="text" placeholder="User Name" />

                </div>
                <div className="col-md-6">
                <label htmlFor="inp2" className="fw-bold clas5"  >Time Stamp</label> <br />
                <InputsHi type="datetime-local" id="inp2" />
                </div>
            </div>
            <div className="row App">
                <div className="col-md-6">
                <label htmlFor="inp3" className="fw-bold clas4"  >MET Condition</label> <br />
                <select id="inp3" className="px-2 py-2 mx-2 inpFoc bg-white" style={{ marginBottom:"4%"}}>
    <option selected >Select Condition</option>
    <option value="1">Yes</option>
    <option value="2">No</option>
  </select>            
                </div>
                <div className="col-md-6">
                <label htmlFor="inp3" className="fw-bold clas4">Visibility in Meter</label> <br />
                <select id="inp3" className="px-2 py-2 mx-2 inpFoc bg-white" style={{ marginBottom:"4%"}}>
    <option selected >Select Visibility</option>
    <option value="1">Yes</option>
    <option value="2">No</option>
  </select>   
                </div>

                
            </div>
            <div className="row App">
                <div className="col-md-6">
                <label htmlFor="inp3" className="fw-bold clas2">Ceiling</label> <br />
                <select id="inp3" className="px-2 py-2 mx-2 inpFoc bg-white" style={{ marginBottom:"4%"}}>
    <option selected >Select Ceiling</option>
    <option value="1">Yes</option>
    <option value="2">No</option>
  </select>            
                </div>
                <div className="col-md-6">
                
                </div>

                
            </div>
            <div style={{paddingBottom:"3%", marginTop:"5%"}}>
            <button className="btn px-4 py-2" style={{backgroundColor:"red", borderRadius:"50px", color:"white", marginLeft:"9%"}}>Submit</button>
            <button className="btn px-4 py-2" style={{backgroundColor:"#FB6A6A", borderRadius:"50px", color:"white", marginLeft:"1%"}}>Cancel</button>
            </div>
</form>

        </div>
    )
}
export default METCondition;