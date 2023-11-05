import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Container, Nav, Row, Col}  from 'react-bootstrap';
import img from './img/bg.png'
import data from './data.json'
import {Routes, Route, Link} from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">Shoe Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>     
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/detail' element={<Detail></Detail>}></Route>
      </Routes>
      </div>
  );
}
function Main(){
  return(
    <>
    <div className='main-bg' style={{backgroundImage:`url(${img})`}}></div>
    <Container>
      <Row>
        <Card data={data}></Card>     
      </Row>
    </Container>
    </>
  )
}
function Card({data}){
  return(
    <>
      {data.map((item,i)=>(
        <Col key={i}>
            <Link to="/detail">
            <img src={`https://codingapple1.github.io/shop/shoes${i+1}.jpg`} alt="img" width="80%" />
            <h4>{item.title}</h4>
            <p>{item.price}원</p>
           </Link>
           </Col>
        ))}
     </>
  )
}

function Detail(){
  return(
    <div className="container">
  <div className="row">
    <div className="col-md-6">
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
    </div>
    <div className="col-md-6">
      <h4 className="pt-5">상품명</h4>
      <p>상품설명</p>
      <p>120000원</p>
      <button className="btn btn-danger">주문하기</button> 
    </div>
  </div>
</div> 
  )
}
export default App;
