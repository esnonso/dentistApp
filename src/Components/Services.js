import { Container, Row, Col} from 'react-bootstrap'
import Logo from '../Images/service1.jpg'

const Services = props => {
    return(
        <Container >
            <div style={{marginBottom:"10px"}}>
                    <h1>Our Services</h1>
                    <hr />
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
            </div>

            <Container style={{backgroundColor:"#E7FFFC", padding:"50px", color:"#1D3E58"}}>
                <Row>
                    <Col><img src={Logo} alt="logo" className="img-thumbnail" /></Col>
                    <Col style={{padding:"50px"}}>
                        <h1>General and Family Dentistry</h1>
                        <p>
                             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                            type specimen book. It has survived not o 
                        </p>
                    </Col>
                </Row>
            </Container>

            <Container style={{backgroundColor:"#a6bfd3", padding:"50px", color:"#E7FFFC"}}>
                <Row>
                <Col style={{padding:"50px"}}>
                        <h1>Cosmetic Dentistry</h1>
                        <p>
                             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                            type specimen book. It has survived not o 
                        </p>
                    </Col>
                    <Col><img src={Logo} alt="logo" className="img-thumbnail" /></Col>
                </Row>
            </Container>

            <Container style={{backgroundColor:"rgb(235, 159, 159)", padding:"50px", color:"#1D3E58"}}>
                <Row>
                    <Col><img src={Logo} alt="logo" className="img-thumbnail" /></Col>
                    <Col style={{padding:"50px"}}>
                        <h1>Special Services</h1>
                        <p>
                             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                            type specimen book. It has survived not o 
                        </p>
                    </Col>
                </Row>
            </Container>

        </Container>
    )
}

export default Services;