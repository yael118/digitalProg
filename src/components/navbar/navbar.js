import Logo from '../logo/logo';
import './navbar.css';
import React, { useEffect, useState, useContext } from 'react';
import { FaBalanceScale } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import { MainContext } from "../main/main.js";

export default function Navbar() {
 /* const [participantNum, setParticipantNum] = useState(participantsCount);*/
  const [classname, setClassname] = useState(0);
  const data = useContext(MainContext);

  useEffect(() => {
    /*setParticipantNum(participantsCount);*/
    setClassname("bi bi-" + data.participants.length + "-circle-fill")
  }, []);

  function exitFunc(){
    //close window
  }
  return (
    <div id="navbar">
      <Logo></Logo>
      <div id="Sidenav" className="sidenav">
        <div className='navItem'>
          <div className='inner-nav-item'>
            <div className='icons'>
              <i className={classname}></i>
              <i className="bi bi-people"></i>
            </div>
            <label className='navTxt'>אנשים</label>
          </div>
        </div>
        <div className='navItem'>
          <div className='inner-nav-item'>
            <div className='icons'>
              <FaBalanceScale />
            </div>
            <label className='navTxt'>פרטי דיון</label></div>
        </div>
        <div className='navItem'>
          <div className='inner-nav-item'>
            <div className='icons'>
              <MdAdminPanelSettings />
            </div>
            <label className='navTxt'>מנהל דיון</label></div>
        </div>
        <div className='navItem'>
          <div className='inner-nav-item'>
            <div className='icons'>
              <i className="bi bi-gear"></i>
            </div>
            <label className='navTxt'>הגדרות</label></div>
        </div>
      </div>
      <div className='navbar-footer'>
        <Button className='exitBtn' onClick={exitFunc}>יציאה מהדיון</Button>
      </div>
    </div>
  );
}
//perfect
