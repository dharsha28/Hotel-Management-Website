import React from 'react';
import './Page.css';
import menu from './Images/menu.png';
import onlineorder from './Images/onlineorder.png';
import delivery from './Images/delivery.png';
function Work(){
    return(
        <div id="work">
            <p id="work-title">How it works</p>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-3" id="menu">
                    <div class="row" id="menu-img"><img src={menu} alt="menu" width="300px" height="280px" /></div>
                    <div class="row-lg-6 row-sm-6" id="menu-title">Adapt your menu items</div>
                    <div class="row" id="menu-content">Easily adapt your menu using the webflow CMS and allow customers to browse your items.</div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-3" id="online-order">
                    <div class="row" id="online-order-img"><img src={onlineorder} alt="onlineorder" width="300px" height="280px" /></div>
                    <div class="row-lg-6 row-sm-6" id="online-order-title">Accept online orders & takeout</div>
                    <div class="row" id="online-order-content">Let your customers order and pay via the powerful ecommerce system, or simple let them call your store.</div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-3" id="delivery">
                    <div class="row" id="delivery-img"><img src={delivery} alt="delivery" width="300px" height="280px" /></div>
                    <div class="row-lg-6 row-sm-6" id="delivery-title">Manage delivery or takeout</div>
                    <div class="row" id="delivery-content">Manage your own logistics and take orders simply through the ecommerce system.</div>
                </div>
            </div>
        </div>
    );
}
export default Work


                    




                    
                    