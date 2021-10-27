import "../App.css"
import { FaRedoAlt } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import logos from "../images/logo.png"
import Buttons from "./button";


const Dashboard = () => {
    return (
        <div className="font back">
            <div className="App grad">
                <div className="row">
                    <div className="col-md-4" style={{ paddingTop: "3.5%" }}>
                        <button style={{ border: "none", padding: "10px", borderRadius: "10px" }} className="px-4" >
                            <FaRedoAlt className="icon" /> Dashboard </button>
                        <p style={{ color: "#ffe8d6", fontSize:"12px" }}>On Position: 18/10/21 23:49:36</p>
                    </div>
                    <div className="col-md-4 py-3">
                        <img src={logos} style={{ marginTop: "1%" }} width="60%" />
                    </div>
                    <div className="col-md-4 my-5 App">
                        <img className="avatar" style={{marginRight: "2%", marginLeft:"20%" }} src="http://placeimg.com/80/80/animals" align="left" />
                        <p className="text-white sizes" align="left">USER ROLE <br />
                            POSITION NAME <br />
                            LAST SESSION
                        </p>
                    </div>
                </div>
            </div>



            <div className="container my-5">
                <div className="row">
                    <div className="col-md-2">
                        <Buttons name="Position Relief" />
                    </div>
                    <div className="col-md-2">
                        <Buttons name="Conditions" />
                    </div>
                    <div className="col-md-2">
                        <Buttons name="General Entry" />
                    </div>
                    <div className="col-md-2">
                        <Buttons name="Fault Reporting" />
                    </div>
                    <div className="col-md-2">
                        <Buttons name="Supplement Instructions" />
                    </div>
                    <div className="col-md-2">
                        <Buttons name="Document Library" />
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-2">
                        <Buttons name="Runway Change" />
                    </div>
                    <div className="col-md-2">
                        <Buttons name="Special Entry" />
                    </div>
                    <div className="col-md-2">
                        <Buttons name="Emergency Checklist" />
                    </div>
                    <div className="col-md-2">
                        <Buttons name="At E-Log" />
                    </div>
                    <div className="col-md-2">
                        <Buttons name="Temperory Instruction" />
                    </div>
                    <div className="col-md-2">
                        <Buttons name="Memo" />
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-2">
                        <Buttons name="Inspection" />
                    </div>
                    <div className="col-md-2">
                        <Buttons name="LVO" />
                    </div>
                    <div className="col-md-2">
                        <Buttons name="Aircraft Diversion" />
                    </div>
                    <div className="col-md-2">
                        <Buttons name="Roster" />
                    </div>
                    <div className="col-md-2">
                        <Buttons name="Notam" />
                    </div>
                    <div className="col-md-2">
                        <Buttons name="Total Movement" />
                    </div>

                </div>
            </div>

            <div className="grad App container" >
                <h2 className="py-4 text-white">E- LOG</h2>
            </div>


            <div className="border-bottom d-table w-100">
                {/* <span className="ic circle mx-5"></span> */}
                <p className="d-table-cell size1">

                    <p className="my-1 mx-2" > Photometric Test, Runway 30 Photometric Test </p>
                </p>
                <div className="d-table-cell tar">
                    <button type="button" className="btn mx-5 px-4 py-2" style={{ border: "1px solid blue", marginTop: "30px", marginBottom: "7%", fontSize:"12px", borderRadius:"50px" }} >18/10/21 18:07:36</button>



                </div>

            </div>
            <div className="border-bottom d-table w-100">
                {/* <span className="ic circle mx-5"></span> */}
                <p className="d-table-cell size1">

                    <p className="my-1 mx-2" > Runway Inspection </p>
                </p>
                <div className="d-table-cell tar">
                    <button type="button" className="btn mx-5 px-4 py-2" style={{ border: "1px solid blue", marginTop: "30px", marginBottom: "7%", fontSize:"12px", borderRadius:"50px" }} >18/10/21 18:07:36</button>



                </div>

            </div>
            <div className="border-bottom d-table w-100">
                {/* <span className="ic circle mx-5"></span> */}
                <p className="d-table-cell size1">

                    <p className="my-1 mx-2" > BCD, MOB 5, NTR </p>
                </p>
                <div className="d-table-cell tar">
                    <button type="button" className="btn mx-5 px-4 py-2" style={{ border: "1px solid blue", marginTop: "30px", marginBottom: "7%", fontSize:"12px", borderRadius:"50px" }} >18/10/21 18:07:36</button>



                </div>

            </div>
            <div className="border-bottom d-table w-100">
                {/* <span className="ic circle mx-5"></span> */}
                <p className="d-table-cell size1">

                    <p className="my-1 mx-2" >Runway Inspection, RWY Lighting Inspection </p>
                </p>
                <div className="d-table-cell tar">
                    <button type="button" className="btn mx-5 px-4 py-2" style={{ border: "1px solid blue", marginTop: "30px", marginBottom: "7%", fontSize:"12px", borderRadius:"50px" }} >18/10/21 18:07:36</button>



                </div>

            </div>
            <div className="border-bottom d-table w-100">
                {/* <span className="ic circle mx-5"></span> */}
                <p className="d-table-cell size1">

                    <p className="my-1 mx-2" > Runway Inspection </p>
                </p>
                <div className="d-table-cell tar">
                    <button type="button" className="btn mx-5 px-4 py-2" style={{ border: "1px solid blue", marginTop: "30px", marginBottom: "7%", fontSize:"12px", borderRadius:"50px" }} >18/10/21 18:07:36</button>



                </div>

            </div>



        </div>
    )
}

export default Dashboard;