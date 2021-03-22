import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactToPrint from 'react-to-print';
import Pdf from 'react-to-pdf'
import{AwesomeQRCode} from "@awesomeqr/react"
import qrLogo from '../qrimage.png'
import QRErrorCorrectLevel from'react-awesome-qr';

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
  function StoreQrPrint() {
    return (
      <div className="StoreQrPrint">
          <div>
<div>
                <div style={{ width: 400, height: 400 }} >
        <p style={{fontSize:14}}>Click on scan Qr code on your LipaFair app to make payment</p>
      <AwesomeQRCode {...options}/>
    </div>
            </div>
            <Pdf targetRef={ref} filename="Qrcode.pdf">
              {({toPdf})=><button onClick={toPdf}>Save Qr</button>}
            </Pdf>
    </div>
      </div>
    );
  }

export default StoreQrPrint
