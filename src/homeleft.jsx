import React from 'react'
import './home.css';
import goodpic from './assets/goodcreator.png';



function homeleft() {
  return (
    <div className='homeleftsec'>
        <div className="symbol">
        <img className="goodcreatorimg " src={goodpic } alt="goodcreatorimg " ></img>
        </div>
        <div className="home"><h3>Home</h3> </div>
        <div className="creatordiscovery">Creator Discovery</div>
        <div className="collection">Collections</div>
        <h5>ANALYTICAL TOOLS</h5>
        <div className="accounttracking">Account Tracking</div>
        <h5>CAMPAIGN TOOLS</h5>
        <div className="smartcampaignreport">Smart Camaigns</div>
        <div className="campaignreport">Campaign Report</div>
    </div>
  )
}

export default homeleft
