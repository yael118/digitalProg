import { React, useContext } from 'react'
import './dis-header.css';
import { BsRecordFill } from "react-icons/bs";
import { MainContext } from "../../main/main.js";

export default function DisHeader() {
    const data = useContext(MainContext);
function expandFunc(){
       //expand screen
    };
    return (
        <div id="dis-header">
            <div>
                <label className='title'>
                    {data.disDetails.sourceSys}, {data.disDetails.comitteeName} - {data.disDetails.disDescription}
                </label>
                <br></br>
                <label>תיק מספר {data.disDetails.courtCase.year} - {data.disDetails.courtCase.month} - {data.disDetails.courtCase.id} </label>
            </div>
            <div className='record-head' >
                <i className="bi bi-arrows-angle-expand" onClick={expandFunc}></i>
                <i className="bi bi-shield"></i>
                <div className="rec">
                    <BsRecordFill style={{display:"inline-block",color:"red"}}/>
                    <label style={{display:"inline-block"}}>מקליט</label>
                </div>

            </div>
        </div>
    );
}