import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Container, Nav, Row, Col}  from 'react-bootstrap';
import img from './img/bg.png'
import data from './data.json'


function App() {
  return (
    <div className="App">
    <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">Shoe Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <div className='main-bg' style={{backgroundImage:`url(${img})`}}></div>
      <Container>
      <Row>
        <Card data={data}></Card>     
      </Row>
    </Container>
    </div>
  );
}

function Card({data}){
  return(
    <>
      {data.map((item,i)=>(
          <Col key={i}>
            <img src={`https://codingapple1.github.io/shop/shoes${i+1}.jpg`} alt="img" width="80%" />
            <h4>{item.title}</h4>
            <p>{item.price}원</p>
           </Col>
        ))}
            </>
  )
}

export default App;
