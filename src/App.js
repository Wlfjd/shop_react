import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Container, Nav, Row, Col}  from 'react-bootstrap';
import img from './img/bg.png'
import data from './data.json'
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import { Detail } from './pages/Detail';


function App() {
  //페이지 이동을 도와주는 함수
  let navigate= useNavigate()
  return (
    <div className="App">
    <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">Shoe Shop</Navbar.Brand>
        <Nav className="me-auto">   
          <Nav.Link href="/detail">상세페이지</Nav.Link>
          <Nav.Link onClick={()=>navigate('/detail')}>상세페이지</Nav.Link>
        </Nav>
        </Container>
      </Navbar>     
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/detail/:id' element={<Detail data={data}></Detail>}></Route>
        <Route path='/event' element={<Event></Event>}>
          <Route path="service" element={<div>첫 주문 시 양배추즙 서비스</div>} />
          <Route path="coupon" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        <Route path='*' element={<div>없는 페이지에요</div>}></Route>
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
            <Link to={`/detail/${i}`}>
            <img src={item.img} alt="img" width="80%" />
            <h4>{item.title}</h4>
            <p>{item.price}원</p>
           </Link>
           </Col>
        ))}
     </>
  )
}
function Event(){
  return(
    <>
    <h2 className='event-title'>오늘의 이벤트</h2>
    <Outlet></Outlet>
    </>
  )
}

export default App;
