import { React, useState, useContext } from 'react'
import DisFooter from '../dis-footer/dis-footer';
import MediaCard from '../../media-card/media-card';
import './dis-content.css'
import { MainContext } from "../../main/main.js";

export default function DisContent() {
 const [cameraOn, setCameraStete] = useState(0);
 const [audioOn, setaudioStete] = useState(0);
 const data = useContext(MainContext);

    const increment = () => {
        setCameraStete(!cameraOn);
    }
    const increment2 = () => {
        setaudioStete(!audioOn);
    }
    function buildJudgeCards() {
        var judeCards = []
        if(data.participants){
        data.participants.map((item)=> {
            if (item.isJudge) {
                judeCards.push(<MediaCard personDetails={item}></MediaCard>)
            }
        })
    }
        return (judeCards)
    }
    function buildCards() {
        var cards = []
        if(data.participants){
            data.participants.map((item)=> {
                if (!item.isJudge) {
                    cards.push(<MediaCard personDetails={item}></MediaCard>)
                }
            })
        }
        return (cards)
    }

    return (
        <div id='dis-content' className="rounded-4">
            <div className='cardsContainer' style={{overflow:"scroll"}}>
                <div className='mainCard'>
                    {buildJudgeCards()}
                </div>
                <div className='mainCard'>
                    {buildCards()}
                </div>
            </div>
            <DisFooter onCamClick={increment} onMicrophonClick={increment2}></DisFooter>
        </div>
    );
}