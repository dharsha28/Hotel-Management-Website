import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page.css';
import Header from './Header';
import Product from './Product';
import fried from './Images/fried.png';
import {Button} from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import Work from './Work';
import Menu from './Menu';
import Footer from './Footer';

function Page(){
    return(
        <div className="page">
            <p className="first-line">We're open and available for takeaway & delivery.</p>
        <Header />    
        <div class="row" id="orders">
            <div class="col-sm-3 col-lg-8 col-md-6" id="order_con">
                <div class="row-lg-4" id="header-title"><p>Beautiful food & takeaway, <span id="deliver">delivered</span> to your door.</p></div>
                <div class="row-lg-7 row-md-6 row-sm-3" id="order-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</div>
                <div class="row-lg-6 row-sm-4" ><Button className={'more-button'} >Place an order</Button></div>
                <div class="row-lg-6 row-sm-4" id="rating-star"><p><span><StarIcon style={{ color: "brown" }}  /></span>  Trustpilot</p></div>
                <div class="row-lg-6 row-sm-4" id="rating"><p><span id="rate">4.8 out of 5</span>  based on 2000+ reviews</p></div>
            </div>
            <div class="col-lg-4 col-sm-3 col-md-6" id="fried-img">
                <img src={fried} alt="fried" width="400px" height="450px"/>
            </div>
        </div>
            <Product />
            <Work />
            <Menu />
            <Footer />
        </div>
    )
}
export default Page