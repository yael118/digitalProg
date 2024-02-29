import { React,useContext } from 'react'
import './discussion.css'
import DisHeader from './dis-header/dis-header';
import DisContent from './dis-content/dis-content';
import { MainContext } from "../main/main.js";

export default function Discussion() {

    const data = useContext(MainContext);

    return (
        <div id="discussion">
            <DisHeader></DisHeader>
      <DisContent></DisContent>
    </div>
    );
}
