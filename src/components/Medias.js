import React from 'react';
import Card from 'react-bootstrap/Card';
import logo from '../images/logo-02.png';
import logo2 from '../images/project2.png';
import Zoom from 'react-reveal/Zoom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Medias() {
    return (
    <Container id = "section_project">
        <Row>
          <Col lg={12} style = {{marginTop: '50px'}}>
            <h1 className = "title_project">PROJECTS</h1>
          </Col>
        </Row>
        
        <Row className = "justify-content-md-center" style = {{marginTop: "30px", marginBottom: "30px"}}>
          <Col xs = {12} lg = {4} style = {{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
            <Zoom>
            <Card style={{ width: '18rem', marginBottom: '30px', boxShadow: '3px 10px 5px grey'}}>
                <Card.Img variant="top" src= {logo} />
                <Card.Body>
                <Card.Title>Miskonsepsi Podcast</Card.Title>
                <Card.Text>
                A Website providing podcasts on bite-sized topics
                </Card.Text>
                    <Card.Link href="https://yosephks.github.io/miskonsepsi.github.io/index.html">Website</Card.Link>
                    <Card.Link href="#">Github</Card.Link>
                </Card.Body>
            </Card>
            </Zoom>
          </Col>
          <Col xs = {12} lg = {4} style = {{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
            <Zoom>
            <Card style={{ width: '18rem', marginBottom: '30px', boxShadow: '3px 10px 5px grey'}}>
                <Card.Img variant="top" src= {logo2} />
                <Card.Body>
                <Card.Title>IKs</Card.Title>
                <Card.Text>
                A Website that provide services to tourists to book a local guide.
                </Card.Text>
                    <Card.Link href="https://cs374-iks.github.io">Website</Card.Link>
                    <Card.Link href="https://github.com/cs374-iks/cs374-iks.github.io">Github</Card.Link>
                </Card.Body>
            </Card>
            </Zoom>
          </Col>
          <Col xs = {12} lg = {4}></Col>
        </Row>
      </Container>

        
)};

export default Medias;