import { React, useState, useContext } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import israelImg from '../../images/israelPng.jpg';
import './media-card.css';
import Microphone from '../microphone/microphone';
import { MainContext } from "../main/main.js";

export default function MediaCard({ personDetails }) {
  const [participant, setparticipant] = useState(personDetails);
  const [imgUrl, setimgUrl] = useState("");

  const data = useContext(MainContext);
  const img1 = require.context('../../images', true);
  const imgContext = require.context('../../images', true);

  return (
    <Card id={'card' + participant.userId} className='card'>
      <CardMedia
        className="media"
        component="img"
        image={participant.videoState ? participant.imgUrl : require('C:\\Users\\yael\\Documents\\digital-prog\\src\\images\\empty.jpg')}
        title={participant.fullName}></CardMedia>
      <div className='top-tag'>
        <Button style={{ backgroundColor: participant.userId == data.currUser.id ? 'rgb(25, 118, 210)' : 'white', color: participant.userId == data.currUser.id ? 'white' : 'rgb(25, 118, 210)' }}>
          <label className='bl' style={{ color: participant.userId == data.currUser.id ? "#ffffff" : "rgb(25, 118, 210)" }}>{participant.userId == data.currUser.id ? 'אני- ' : ''}{participant.audioState ? 'דובר' : (participant.isJudge == true ? `${participant.position}` : 'צד ' + `${participant.position}`)}</label>
        </Button>
      </div>
      <div className='note overlay'>
        {participant.isJudge == true ?
          <div className='judge-icon' >
            <img className='miniIsrael' src={israelImg}></img>
          </div> : <></>
        }
        <div style={{ margin: '10px' }}>
          <div className='title'>
            {participant.isJudge == false ? <label className='bl'> צד {participant.position}</label>
              : <label className='bl'>{data.disDetails.comitteeName}</label>}
          </div>
          <label className=''>{participant.description} {participant.fullName}</label>
        </div>
        <Microphone id={'microphone' + participant.userId} isOpen={participant.audioState}></Microphone>
      </div>

    </Card>

  );
}