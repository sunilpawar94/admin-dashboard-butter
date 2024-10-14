import React from 'react'
import './home.css';
import goodpic from './assets/goodcreator.png';




function homeleft() {
  /* const toggleBtn = document.getElementById('navtoggle');
  const navLink =document.getElementById('navlink');

  toggleBtn.addEventListener('click', () => {
    navLink.classList.toggle('active');
  }) */
  return (
    <>
    <div className="logo"  href= "#" id='navtoggle'><i class='bx bx-menu'></i></div>
    <div className='homeleftsec  active' href= "#" id='navlinks'>
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
    </>
  )
}

export default homeleft
