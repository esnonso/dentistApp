import React,{ Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
    render(){
        return(
            <div className="footer">
                <div className="container color"></div>
            <Container fluid className="footer-div">
                <Row>
                    <Col>
                        <div className="jumbotron-fluid">
                            <h1> WORLD DENTIST SHOP</h1>
                            <hr></hr>
                            <h4><em>Your tooth's home</em></h4>
                        </div>
                    </Col>
                    <Col>
                        <h5>Virginia</h5>
                        <p>123-456-7890</p>
                        <p>world@mkdentistry.com</p>
                        <hr></hr>
                        <h5>Virginia</h5>
                        <p>123-456-7890</p>
                        <p>world@mkdentistry.com</p>
                    </Col>
                    <Col>
                        <p><FontAwesomeIcon icon={faFacebook} size="3x"/> </p>
                        <p><FontAwesomeIcon icon={faInstagram} size="3x"/></p> 
                        <p><FontAwesomeIcon icon={faLinkedinIn} size="3x"/></p>
                    </Col>
                </Row>
                <p>&copy;2021 World Dentist Shop</p>
            </Container>
            </div>
        )
    }
}

export default Footer;