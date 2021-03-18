import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactToPrint from 'react-to-print';
import{AwesomeQRCode} from "@awesomeqr/react"
import qrLogo from '../qrimage.png'
import QRErrorCorrectLevel from'react-awesome-qr';




const options={
    text:"Mwangi Supplies;GFHE-1728-2WHTD-BSY2;50",
    size:300,
    logoImage:qrLogo,
    logoScale:0.25,
    logoMargin:3,
    correctionLevel:QRErrorCorrectLevel.H=2,
    dotScale:1
  
  
  }
export class storeQrPrint extends Component {
  
    
    

    render() {
        return (
            <div>
                <div style={{ width: 400, height: 400 }}>
        <p style={{fontSize:14}}>Click on scan Qr code on your LipaFair app to make payment</p>
      <AwesomeQRCode {...options}/>
    </div>
            </div>
        )
    }
}

export default storeQrPrint
