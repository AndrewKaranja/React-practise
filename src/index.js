import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import qrLogo from './whiteblacksquarer.png'
import ReactQr from 'react-awesome-qr'
import ReactToPrint from 'react-to-print';
import{AwesomeQRCode} from "@awesomeqr/react"
import reportWebVitals from './reportWebVitals';
import QRErrorCorrectLevel from'react-awesome-qr';




const Body=()=>{
  return(
    <div id='body'>
      <Header/>
      <Card/>
      <ContactContainer/>
    </div>
  )
}

const Header=()=>{
  return(
    <div className='landing-header'>
<span className='landing-header-title'>
  Tukio
</span>
<br/>
<span>
  Connecting Art
</span>
</div>
  )
}

const options={
  text:"Mwangi Supplies;GFHE-1728-2WHTD-BSY2;50",
  size:300,
  logoImage:qrLogo,
  logoScale:0.25,
  logoMargin:3,
  correctionLevel:QRErrorCorrectLevel.H=2,
  dotScale:1


}
const Card=(props)=>{
  return(
    <div className={props.className}>
      <div className="big-div">
      Lorem Ipsum is simply dummy text of
      the printing and typesetting industry.
      Lorem Ipsum has been the industry's 
      standard dummy text ever since the 1500s,
      when an unknown printer took a galley of 
      type and scrambled it to make a type specimen book.
      </div>
      {/* <ReactQr text="Business ID:GFHE-1728-2WHTD-HDY3" size={300} logoImage={qrLogo} correctionLevel={3}/> */}
  
  <div style={{ width: 400, height: 400 }}>
        <p style={{fontSize:14}}>Click on scan Qr code on your LipaFair app to make payment</p>
      <AwesomeQRCode {...options}/>
    </div>
    <div>
      
    </div>


<br/>
<button>
  Get Started
</button>
<span>
  Connecting Art
</span>
</div>
  )
}
const ContactContainer=()=>{
  return(
    <div className='landing-contacts'>
<span className='landing-header-title'>
  Tukio
</span>
<br/>
<span>
  Connecting Art
</span>
</div>
  )
}
ReactDOM.render(
  <React.StrictMode>
    
    <Body/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
