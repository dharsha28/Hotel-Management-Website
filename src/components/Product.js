import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import burger from './Images/burger.png';
import './Page.css';
import {Button} from '@material-ui/core';
function Product(){
    return(
        <div class="row" id="products">
            <div class="col-sm-3 col-lg-8 col-md-6" id="prod_con">
                <div class="row-lg-4" id="title"><p>The home of fresh products</p></div>
                <div class="row-lg-7 row-md-6 row-sm-3" id="main-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</div>
                <div class="row-lg-6 row-sm-4" ><Button className={'more-button'} >Learn about us</Button></div>
            </div>
            <div class="col-lg-4 col-sm-3 col-md-6" id="burger-img">
                <img src={burger} alt="burger" width="400px" height="600px"/>
            </div>
        </div>
    );
}
export default Product