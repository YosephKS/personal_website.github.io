import React from 'react';
import './App.css';
import Forms from './components/Forms';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbars from './components/Navbars';
import Medias from './components/Medias';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import photo from './images/Photo_YosephKS.jpg';



class App extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render(){
  return (
    <div className="App" >
      <Container fluid = {true} id = "container">
        <Row>
          <Col>
            <Navbars />
          </Col>
        </Row>
        <Row>
          <Col id = "name">
              <p className = "title">Yoseph Kurnia Soenggoro</p>
              <p className = "subtitle">Web Designer | Web Developer | Tech Enthusiast</p>
          </Col>
        </Row>
      </Container>
      
      <Medias />

      <Container fluid = {true} style = {{backgroundColor: '#013A6B'}} id = "section_about">
        <Row>
          <Col>
            <h1 className = "title_about">ABOUT</h1>   
          </Col>
        </Row>
        <Row className = "content_about">
          <Col lg = {4} sm = {12} style = {{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
            <img src = {photo} alt = {"Profile"} style = {{height: '300px', width: '215px'}} />
          </Col>
          <Col lg = {7} sm = {12} style = {{color: 'white', paddingLeft: '25px', paddingRight: '25px'}}>
            <h5 style = {{lineHeight: '2em', fontSize: '20px'}}>
            Senior student from CUHK Shenzhen. Experienced Web Design and Developer. Capable to use AdobeXD to create a beautiful design for Front-end. Proficient in utilizing MERN Stack to build a Fullstack Web Application. Have a solid understanding of UI/UX Design and REST API. Capable to use Tensorflow and Tensorflow.js for Machine Learning purpose. Interested in Big Data, Deep Learning, and Blockchain applications on Web App.
            </h5>
          </Col>
        </Row>
      </Container>
      <Container fluid = {true} style = {{color: 'white', backgroundColor: '#004E95'}} id = "section_skills">
        <Row className = "justify-content-md-center">
          <Col style = {{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
            <h1 className = "title_skill">SKILLS</h1>   
          </Col>
        </Row>
        <Row style = {{paddingTop: '50px', paddingBottom: '50px'}}>
          <Col lg ={4} sm = {12} style = {{fontSize: '30px', display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
            <Container fluid = {true}>
              <Row>
                <Col><i class="fas fa-layer-group"></i></Col>
              </Row>
              <Row className = "row">
                <Col className = "cell">UI/UX Design</Col>
              </Row>
            </Container>
          </Col>
          <Col lg ={4} sm = {12} style = {{fontSize: '30px', display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
            <Container fluid = {true}>
              <Row>
                <Col><i class="fas fa-users"></i></Col>
              </Row>
              <Row className = "row">
                <Col className = "cell">User Research</Col>
              </Row>
            </Container>
          </Col>
          <Col lg ={4} sm = {12} style = {{fontSize: '30px', display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
            <Container fluid = {true}>
              <Row>
                <Col><i class="fas fa-code"></i></Col>
              </Row>
              <Row className = "row">
                <Col className = "cell">Frontend Development</Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row style = {{paddingTop: '50px', paddingBottom: '50px'}}>
          <Col lg ={6} sm = {12} style = {{fontSize: '30px', display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
            <Container fluid = {true}>
              <Row>
                <Col><i class="fab fa-github"></i></Col>
              </Row>
              <Row className = "row">
                <Col className = "cell">GitHub</Col>
              </Row>
            </Container>
          </Col>
          <Col lg ={6} sm = {12} style = {{fontSize: '30px', display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
            <Container fluid = {true}>
              <Row>
                <Col><i class="fas fa-database"></i></Col>
              </Row>
              <Row className = "row">
                <Col className = "cell">Database Design</Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container fluid = {true} id = "section_contact">
        <Row className = "justify-content-md-center">
          <Col style = {{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
            <h1 className = "title_contact">Contact</h1>
          </Col>
        </Row>
        <Row>
          <Col className = "google_map" lg = {5} md = {11} sm = {10} xs = {10} style = {{height: '350px', margin: '20px 20px 20px 20px'}}>
          <Map google={this.props.google} 
                zoom={10}
                initialCenter={{
                lat: 22.687845,
                lng: 114.209931
                }}>
                <Marker />
                </Map>
          </Col>
          <Col className = "form" lg = {6} md = {12} style = {{margin: '20px 20px 20px 20px'}}>
            <Forms/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCPNd7-B-Rh6BL-5N5sfnKRI-l_YN9XRR0')
 })(App);