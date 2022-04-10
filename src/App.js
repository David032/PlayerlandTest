import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Navbar,Container,Card,CardGroup,Button, Modal} from 'react-bootstrap';
import * as React from 'react';

function App() {
  const [show, setShow] = React.useState(false); 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className="App">
      <header className="App-header">

      <Navbar bg="black" variant="dark">
          <Container>
              <Nav className="top-bar">
                <Nav.Link href="#home">Twitter Icon</Nav.Link>
                <Nav.Link href="#home">Twitch Icon</Nav.Link>
                <div class="position-absolute end-0">
                  <Nav.Link href="#link">back to website</Nav.Link>
                </div>
              </Nav>
          </Container>
        </Navbar>


        <div bg="dark" variant="dark">
          <Nav justify className="justify-content-center" activeKey="/home">
            <Nav.Link href="#home">Playerlands.com</Nav.Link>
            <Nav>Playerlands logo here</Nav>
            <Nav.Link href="#link">Playerlands Discord</Nav.Link>                
          </Nav>
        </div>

        <Navbar fill bg="black" variant="dark">
          <Container>
              <Nav className="bottom-bar">
                <Nav.Link href="#home">Home</Nav.Link>
                <div class="position-absolute end-0">
                  <Button variant="primary" onClick={handleShow}>
                    Login
                  </Button>
                </div>
              </Nav>
          </Container>
        </Navbar>

        <Modal show={show} onHide={handleClose}>
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Login with your Minecraft Username</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <input placeholder='Username'></input>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary">Cancel</Button>
              <Button variant="primary">Login</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>

        <CardGroup>
          <Card border='dark' style={{width: '20rem'}}>
            <Card.Body>
              <Card.Title>Playerlands</Card.Title>
              <Card.Text>
                Please select a category above to browse our packages for sale. <br></br>
                We accept payments via credit/debit cards, paypal and dozens of other methods
                <h3>Information:</h3>
                Mauris sed faucibus nunc. Nulla vehicula sit amet lorem cursus pharetra. Morbi blandit neque ligula, eu pellentesque ipsum placerat quis. 
                Sed fermentum vestibulum eros, at dapibus mauris tempor at. Vivamus ut euismod velit. Maecenas pretium convallis massa, sed consequat lectus tincidunt sed. 
                Phasellus ac enim quis eros pharetra egestas sed.
                <h3>If you have any questions or concerns, please email our payment support team at PlayerLands</h3>
                <h3>To be directed back to our official website please click <a href = "#home">here</a></h3>
                <h3>Disclaimers:</h3>
                In hac habitasse platea dictumst. Integer lacus leo, hendrerit euismod ligula quis, dapibus tristique orci. Mauris dapibus, 
                nisl et pharetra feugiat, dolor justo accumsan leo.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border='dark' style={{width: '20rem'}}>
            <Card.Body>
              <Card.Title>Top Donator</Card.Title>             
              <Card.Text>
              The top donator of the month is currently: [interface point for fetching donation data from server here]
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border='dark' style={{width: '20rem'}}>
            <Card.Body>
              <Card.Title>Gift Card Balance</Card.Title>
              <input placeholder='Enter Code'></input>
              <br></br>
              <Button variant="primary">Check Giftcard balance</Button>
            </Card.Body>
          </Card>
          <Card border='dark' style={{width: '20rem'}}>
            <Card.Body>
              <Card.Title>Recent Payments</Card.Title>
              <Card.Img src = "TemplateImages/200.png" alt = "Most recent donor"/>
            </Card.Body>
          </Card>
        </CardGroup>

      </header>
    </div>
  );
}

export default App;
