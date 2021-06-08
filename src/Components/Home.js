import { Container, Row, Col, Button} from 'react-bootstrap'
import Image from '../Images/profile-pic.png'
const Home = props => {
    return(
        <div className="container">
             <div className="panel panel-default">
                 <div className="panel-heading"><h1>Welcome!</h1></div>
                 <div className="panel-body panel-body-accounts">
                     <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                             including versions of Lorem Ipsum.
                     </p>
                     <hr />
                     <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                             including versions of Lorem Ipsum.
                     </p>
                 </div>
             </div>
            <Container>
                <Row className="home-row">
                    <Col >
                        <img src={Image} alt="profile"  height="100px" width="100px" className="myProfile"/>
                        <h3>Our Services</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                             including versions of Lorem Ipsum.
                        </p>
                        <Button variant="outline-primary" size="lg">Learn more</Button>
                    </Col>

                    <Col>
                        <img src={Image} alt="profile"  height="100px" width="100px" className="myProfile"/>
                        <h3>Our Story</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                            a type specimen book.  versions of Lorem Ipsum.
                        </p>
                        <Button variant="outline-primary" size="lg">Learn more</Button>
                    </Col>

                    <Col>
                        <img src={Image} alt="profile"  height="100px" width="100px" className="myProfile"/>
                        <h3>Our Practices</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                            a type specimen book.luding versions of Lorem Ipsum.
                        </p>
                        <Button variant="outline-primary" size="lg">Learn more</Button>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Home