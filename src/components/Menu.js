import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import lime from './Images/lime.png';
import chettinadfry from './Images/chettinadfry.png';
import comfortfoods from './Images/comfortfoods.png';
import vadacurry from './Images/vadacurry.png';
import {Button} from '@material-ui/core';

function Menu(){
    return(
        <div className="browse-menu">
            <p id="browse-title">Browse our menu</p>
            <p id="browse-content">Use our menu to place an order online, or <span id="ph">phone</span> our store to place a pickup order. Fast and fresh food.</p>
            <Container>
                <Row>
                    <Col sm={{ span:1, offset: 2 }}><Button id="items-list">Burger</Button></Col>
                    <Col sm={{ span:1, offset: 2 }}><Button id="items-list">Sides</Button></Col>
                    <Col sm={{ span:1, offset: 2 }}><Button id="items-list">Drinks</Button></Col>
                </Row>
            </Container>
            <Container id="container">
            <Row>
                <Col sm={{ size: 'auto', offset: 0, span:6 }}>
                    <Row id="first">
                        <Col sm={{size:'auto', span:4}}>
                            <img src={lime} alt="lime" id="menu-img" width="120px" height="120px" />
                        </Col>
                        <Col sm={{size:'auto', span:8}}>
                            <Row>
                                <Col><h6>Drink Fig & Lime</h6></Col>
                                <Col className="price">$4.00 USD</Col>
                            </Row>
                            <Row id="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Row>
                            <Row>
                                <Col><input type="text" id="pin" name="pin" maxlength="4" size="3" /></Col>
                                <Col><Button id="addtocart-btn">Add to cart</Button></Col>
                            </Row>
                        </Col> 
                    </Row>
                    <Row>{" "}</Row>
                    <Row>{" "}</Row>
                    <Row id="first">
                        <Col sm={{size:'auto', span:4}}>
                            <img src={vadacurry} alt="vdcry" id="menu-img" width="120px" height="120px" />
                        </Col>                        
                        <Col sm={{size:'auto', span:8}}>
                            <Row>
                                <Col><h6>Coin Parotta</h6></Col>
                                <Col className="price">$4.00 USD</Col>
                            </Row>
                            <Row id="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Row>
                            <Row>
                                <Col><input type="text" id="pin" name="pin" maxlength="4" size="3" /></Col>
                                <Col><Button id="addtocart-btn" >Add to cart</Button></Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col sm={{ size: 'auto', offset: 0, span:6 }}>
                    <Row id="first">
                        <Col sm={{size:'auto', span:4}}>
                            <img src={chettinadfry} id="menu-img" alt="chfry" width="120px" height="120px" />
                        </Col>
                        <Col sm={{size:'auto', span:8}}>
                            <Row>
                                <Col><h6>Chettinad Fry</h6></Col>
                                <Col className="price">$4.00 USD</Col>
                            </Row>
                            <Row id="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Row>
                            <Row>
                                <Col><input type="text" id="pin" name="pin" maxlength="4" size="3" /></Col>
                                <Col><Button id="addtocart-btn" >Add to cart</Button></Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>{" "}</Row>
                    <Row>{" "}</Row>
                    <Row id="first">
                        <Col sm={{size:'auto', span:4}}>
                            <img src={comfortfoods} alt="cfd" id="menu-img" width="120px" height="120px" />
                        </Col>
                        <Col sm={{size:'auto', span:8}}>
                            <Row>
                                <Col><h6>Vada Kari &nbsp;&nbsp;&nbsp;&nbsp;</h6></Col>
                                <Col className="price">$4.00 USD</Col>
                            </Row>
                            <Row id="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Row>
                            <Row>
                                <Col><input type="text" id="pin" name="pin" maxlength="4" size="3" /></Col>
                                <Col><Button id="addtocart-btn" >Add to cart</Button></Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            </Container>
            <center><Button id="full-menu">See full menu</Button></center>
        </div>
    );
}
export default Menu