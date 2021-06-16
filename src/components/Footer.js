import React from 'react';
import LogoIcon from './Images/LogoIcon.png';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer(){
    return(
        <div id="footer">
            <div class="row"  >
                <div class="col-lg-6 col-sm-5" id="logo"><img src={LogoIcon} alt="logo" width="130px" height="130px" /><p id="logo-content">Takeaway & Delivery food for small - medium businesses.</p></div>
                <div class="col-lg-2 col-md-4 col-sm-4">
                    <p id="footer-subtitle">COMPANY</p>
                        <li>Home</li>
                        <li>Order</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-2">
                    <p id="footer-subtitle">TEMPLATE</p>
                        <li>Style Guide</li>
                        <li>Changelog</li>
                        <li>Licence</li>
                        <li>Webflow University</li>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-2">
                    <p id="footer-subtitle">FLOWBASE</p>
                        <li>More Cloneables</li>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 col-sm-3 col-md-3"><p id="last">Build by<span className="flow"> Flowbase</span> .powered by<span className="flow"> Webflow</span></p></div>
                <div class="col-lg-4 col-sm-3 col-md-3" id="social-media">
                    <div class="row">
                        <div class="col-lg-2"><TwitterIcon id="TwitterIcon" fontSize="large"  /></div>
                        <div class="col-lg-2"><YouTubeIcon id="YouTubeIcon" fontSize="large"  /></div>
                        <div class="col-lg-2"><InstagramIcon id="InstagramIcon" fontSize="large"  /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer