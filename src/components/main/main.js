import { React, createContext } from 'react'
import './main.css'
import Navbar from '../navbar/navbar';
import Discussion from '../discussion/discussion';
export const MainContext = createContext();
const data = {
    participants : [
    {
        position: 'משיב',
        userId: 456,
        description: 'עורך דין',
        fullName: 'לוי יצחק קליין',
        videoState: true,
        audioState: false,
        isJudge: false,
        imgUrl:"https://cdn.pixabay.com/photo/2018/11/08/23/52/man-3803551_1280.jpg"
        //require('C:\\Users\\yael\\Documents\\digital-prog\\src\\images\\IMG_2253.jpg')
    },
    {
        position: 'משיב',
        userId: 741,
        description: '',
        fullName: '  רן חיימוביץ',
        videoState: false,
        audioState: false,
        isJudge: false,
        imgUrl: "https://cdn.pixabay.com/photo/2015/01/08/18/30/entrepreneur-593371_1280.jpg"
//        "require('C:\\Users\\yael\\Documents\\digital-prog\\src\\images\\IMG_2253.jpg')
    }
    ,
    ,{
        position: 'עורר',
        userId: 123,
        description: 'עורך דין',
        fullName: 'שי טל',
        videoState: true,
        audioState: false,
        isJudge: false,
        imgUrl: "https://cdn.pixabay.com/photo/2015/01/08/18/30/man-593372_1280.jpg"
        //require('C:\\Users\\yael\\Documents\\digital-prog\\src\\images\\IMG_4116.jpg')
    },{
        position: 'עורר',
        userId: 321,
        description: 'עורך דין',
        fullName: 'נעמי קליין',
        videoState: true,
        audioState: true,
        isJudge: false,
        imgUrl: "https://cdn.pixabay.com/photo/2015/06/22/08/38/children-817368_1280.jpg"
       // require('C:\\Users\\yael\\Documents\\digital-prog\\src\\images\\IMG_3410.jpg')
    },
    {
        position: 'שופט',
        userId: 789,
        description: 'כבוד השופט',
        fullName: 'צבי קליין',
        videoState: true,
        audioState: true,
        isJudge: true,
        imgUrl: "https://cdn.pixabay.com/photo/2024/01/29/20/40/cat-8540772_1280.jpg"
        //"require('C:\\Users\\yael\\Documents\\digital-prog\\src\\images\\IMG_3410.jpg')
    }
    /*,{
        position: 'שופט',
        userId: 987,
        description: 'כבוד השופטת',
        fullName: 'יעל קליין',
        videoState: true,
        audioState: false,
        isJudge: true,
        imgUrl: "https://cdn.pixabay.com/photo/2015/03/11/09/35/african-668398_1280.jpg"
        //require('C:\\Users\\yael\\Documents\\digital-prog\\src\\images\\IMG_3571.jpg')
    }*/

],
currUser : {
    id : 123,
    fullName : "שי טל"
  },
  disDetails : {
    sourceSys: "משרד המשפטים",
    comitteeName: "ועדת ערר לעניני קורנה",
    disDescription: "השתתפות בהוצאות קבועות",
    courtCase: {
        id: '123456',
        month: '02',
        year: '2022'
    }
}
}

export default function Main() {
  
    return ( 
        <MainContext.Provider value={data}>
        <div id="main">
            <Navbar></Navbar>
            <Discussion></Discussion>
        </div>
        </MainContext.Provider>
);
}
