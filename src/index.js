import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Pdf from 'react-to-pdf'
import ReactToPrint from 'react-to-print';
import{AwesomeQRCode} from "@awesomeqr/react"
import qrLogo from '../qrimage.png'
import QRErrorCorrectLevel from'react-awesome-qr';

import ReactQr from 'react-awesome-qr'

import reportWebVitals from './reportWebVitals';

const ref=React.createRef();


const options={
  text:"Mwangi Supplies;GFHE-1728-2WHTD-BSY2;50",
  size:300,
  logoImage:qrLogo,
  logoScale:0.25,
  logoMargin:3,
  correctionLevel:QRErrorCorrectLevel.H=2,
  dotScale:1


}

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
const PDF=(props)=>{
  return(
    <div>
<div>
                <div style={{ width: 400, height: 400 }} >
        <p style={{fontSize:14}}>Click on scan Qr code on your LipaFair app to make payment</p>
      <AwesomeQRCode {...options}/>
    </div>
            </div>
            <Pdf >
              {({toPdf})=><button onClick={toPdf}>Save Qr</button>}
            </Pdf>
    </div>
   
  )
}

const Card=(props)=>{
  return(
    <div className={props.className}>
      <div style={{ width: 400, height: 400 }}>
      <ReactQr 
      text="Mwangi Supplies;GFHE-1728-2WHTD-BSY2;50" 
      size={300} 
      dotScale={1}
      logoSrc={require('./qrimage.png')} 
      logoScale={0.25}/>
      </div>
      <div className="big-div">
      Lorem Ipsum is simply dummy text of
      the printing and typesetting industry.
      Lorem Ipsum has been the industry's 
      standard dummy text ever since the 1500s,
      when an unknown printer took a galley of 
      type and scrambled it to make a type specimen book.
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
