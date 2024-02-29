import './logo.css';
import React from 'react';
import israelImg from '../../images/israelPng.jpg'

export default function Logo() {

    return (
      <div>
            <img className ='logo' src={israelImg}></img>
      </div>
      );
    }