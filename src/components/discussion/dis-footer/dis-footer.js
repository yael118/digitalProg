import { React } from 'react';
import { Button} from '@mui/material';
import { Button as Bbutton} from 'react-bootstrap';
import Stopwatch from '../../stop-watch/stop-watch';
import './dis-footer.css';

export default function DisFooter({onCamClick,onMicrophonClick}) {
function shareFunc()
{
    
}
    return (
        <div className='dis-footer'>
            <div className='options'>
                <Button variant="contained" startIcon={<i className="bi bi-camera-video-fill" onClick={onCamClick}></i>}>
                מצלמה
                </Button>
                <Button variant="contained" startIcon={<i className="bi bi-mic-fill" onClick={onMicrophonClick}></i>}>
                    מיקרופון
                </Button>
                <Button variant="contained" startIcon={<i className="bi bi-file-arrow-up"  onClick={shareFunc}></i>}>
                    שיתוף
                </Button>
            </div>
            <div className='timer'>
                <Stopwatch></Stopwatch>
                 <Bbutton  variant='danger'>LIVE</Bbutton>
            </div>
        </div>
    );
}