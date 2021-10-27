import "../App.css"
import { FaArrowLeft } from "react-icons/fa";
import logos from "../images/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import InputsHi from "./input";

const Aircraft = () => {
    

    return (
        <div className="font back4">
            <div className="App grad">
                <FaArrowLeft className="wids" />
                <img className="wid" src={logos} />
            </div>

            <div className="App">
                <h1 style={{ color: "#505050" }} className="fw-bold my-5">Aircraft Diversion</h1>
            </div>

<form>
            <div className="row App">
                <div className="col-md-6">
                <label htmlFor="inp1" style={{ color: "#c9ada7", marginRight: "62%", paddingBottom: "1%" }}>Initial</label> <br />
                    <input className="px-3 py-2 mx-2 inpFoc" id="inp1" value="OMA" style={{ backgroundColor: "#e9edc9",marginBottom:"4%" }} disabled id="outlined-disabled" type="text" placeholder="User Name" />

                </div>
                <div className="col-md-6">
                <label htmlFor="inp2" className="fw-bold clas1"  >Airport ATC Informed @ Time</label> <br />
                <InputsHi type="text" id="inp2" placeholder="Enter Vehicle" />
                </div>
            </div>
            <div className="row App">
                <div className="col-md-6">
                <label htmlFor="inp2" className="fw-bold clas4" >Aircraft Callsign</label> <br />
                <InputsHi type="text" id="inp2" placeholder="Enter Vehicle" />
                </div>
                <div className="col-md-6">
                <label htmlFor="inp2" className="fw-bold clas1"  >Time When Aircraft Diverts*</label> <br />
                <InputsHi type="text" id="inp2" placeholder="Enter Vehicle" />
                </div>

                
            </div>
            <div className="row App">
                <div className="col-md-6">
                <label htmlFor="inp2" className="fw-bold clas4" >Aircraft Type*</label> <br />
                <InputsHi type="text" id="inp2" placeholder="Enter Vehicle" />
                </div>
                <div className="col-md-6">
                <label htmlFor="inp2" className="fw-bold clas6" >SSR Transponder Code*</label> <br />
                <InputsHi type="text" id="inp2" placeholder="Enter Vehicle" />
               
                </div>

                
            </div>
            <div className="row App">
                <div className="col-md-6">
                <label htmlFor="inp2" className="fw-bold clas7" >Point of Departure*</label> <br />
                <InputsHi type="text" id="inp2" placeholder="Enter Vehicle" />
                </div>
                <div className="col-md-6">
                <label htmlFor="inp2" className="fw-bold clas6" >Intended Destination*</label> <br />
                <InputsHi type="text" id="inp2" placeholder="Enter Vehicle" />
               
                </div>

                
            </div>
            <div className="row App">
                <div className="col-md-6">
                <label htmlFor="inp2" className="fw-bold clas4" >New Destination*</label> <br />
                <InputsHi type="text" id="inp2" placeholder="Enter Vehicle" />
                </div>
                <div className="col-md-6">
                <label htmlFor="inp2" className="fw-bold clas6" >Actual Time of Arrival</label> <br />
                <InputsHi type="text" id="inp2" placeholder="Enter Vehicle" />
               
                </div>

                
            </div>
            <div className="row App">
                <div className="col-md-6">
                <label htmlFor="inp2" className="fw-bold clas1" >SAS OCC Informed @ Time</label> <br />
                <InputsHi type="text" id="inp2" placeholder="Enter Vehicle" />
                </div>
                <div className="col-md-6">
                <label htmlFor="inp2" className="fw-bold clas7" >Details / Reasons</label> <br />
                <InputsHi type="text" id="inp2" placeholder="Enter Vehicle" />
               
                </div>

                
            </div>
            <div className="row App">
            <div className="col-md-6">
               
               </div>
                <div className="col-md-6">
                <label htmlFor="inp2" className="fw-bold clas3" >Diversion Arrival MSG Sent Time Stamp</label> <br />
                <InputsHi type="text" id="inp2" placeholder="Enter Vehicle" />
                </div>
                

                
            </div>
            <div style={{paddingBottom:"3%", marginTop:"1%"}}>
            <button className="btn px-4 py-2 mar" style={{backgroundColor:"red", borderRadius:"50px", color:"white"}}>Submit</button>
            <button className="btn px-4 py-2" style={{backgroundColor:"#FB6A6A", borderRadius:"50px", color:"white", marginLeft:"1%"}}>Cancel</button>
            </div>
</form>

        </div>
    )
}
export default Aircraft;