import { Container, Row, Col } from 'react-bootstrap';
import Doctor from '../Images/doctors.jpg'
import Image from '../Images/profile-pic.png'

const Doctors = props => {
    return(
        <div >
        <Container style={{backgroundColor:"#ece6e4", color:"#282C34"}}>
            <h1>Meet our Doctors</h1>
            <hr />
            <p>
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
             unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
             and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </Container>

        <Container>
            <img src={Doctor} alt="Doctors" width="100%"  height="400px"/>
        </Container>

        <Container>
            <h1>The Team</h1>
            <Row>
                <Col><img src={Image} alt="profile"  class="img-thumbnail"/></Col>
                <Col><img src={Image} alt="profile"  class="img-thumbnail"/></Col>
                <Col><img src={Image} alt="profile"  class="img-thumbnail"/></Col>
                <Col><img src={Image} alt="profile"  class="img-thumbnail"/></Col>
            </Row>
            <Row>
                <Col><img src={Image} alt="profile"  class="img-thumbnail"/></Col>
                <Col><img src={Image} alt="profile"  class="img-thumbnail"/></Col>
                <Col><img src={Image} alt="profile"  class="img-thumbnail"/></Col>
                <Col><img src={Image} alt="profile"  class="img-thumbnail"/></Col>
            </Row>
        </Container>
        </div>
    )
}

export default Doctors;