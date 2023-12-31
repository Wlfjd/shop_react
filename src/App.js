import React, { useState, useEffect, createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import img from "./img/bg.png";
import data from "./data.json";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { Detail } from "./pages/Detail";
import axios from "axios";
import { Cart } from "./pages/Cart";
import { useQuery } from "@tanstack/react-query";

// state 보관함
export let Context = createContext();

function App() {
  useEffect(() => {
    //새로고침 시 초깃값으로 돌아가는거 방지
    if (!localStorage.getItem("watched")) {
      localStorage.setItem("watched", JSON.stringify([]));
    }
  }, []);

  let [stock, setStock] = useState([10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);

  //페이지 이동을 도와주는 함수
  let navigate = useNavigate();

  // const result = useQuery({
  //   queryKey: ["user"],
  //   queryFn: async () => await axios.get("https://codingapple1.github.io/userdata.json"),
  // });

  const result = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      // 비동기 작업 수행
      const response = await axios.get(
        "https://codingapple1.github.io/userdata.json"
      );
      return response.data;
    },
  });

  if (result.isLoading) {
    return <p>Loading...</p>;
  }

  console.log(result.data.name);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            Shoe Shop
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/cart")}>장바구니</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {result.isLoading && "로딩중"}
            {result.error && "error"}
            {result.data && (
              <div style={{ fontSize: "12px" }}>
                반갑습니다 <b>{result.data.name}</b> 님
              </div>
            )}
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route
          path="/detail/:id"
          element={
            <Context.Provider value={{ stock }}>
              <Detail data={data} />
            </Context.Provider>
          }
        ></Route>
        <Route path="/event" element={<Event></Event>}>
          <Route
            path="service"
            element={<div>첫 주문 시 양배추즙 서비스</div>}
          />
          <Route path="coupon" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="*" element={<div>없는 페이지에요</div>}></Route>
      </Routes>
    </div>
  );
}
function Main() {
  let [shoes, setShoes] = useState(data); // 이건 갑자기 왜 무쓸모가 된거지?
  let [click, setClick] = useState(0);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (click === 1 || click === 2) {
      setIsLoading(true);
      axios
        .get(`https://codingapple1.github.io/shop/data${click + 1}.json`)
        .then((res) => {
          data.push(...res.data);
          setShoes(data);
          setIsLoading(false);
        })
        .catch(() => {
          console.log("요청 실패");
          setIsLoading(false);
        });
    }
  }, [click]);

  return (
    <>
      <div className="main-bg" style={{ backgroundImage: `url(${img})` }}></div>
      <Container>
        <Row>
          <Card data={shoes}></Card>
        </Row>
      </Container>
      {click < 2 && (
        <button
          className="alert alert-primary p-1"
          onClick={() => {
            setClick((prev) => prev + 1);
          }}
        >
          다음
        </button>
      )}
      {isLoading && <p className="alert alert-danger"> 로딩중입니다</p>}
    </>
  );
}

function Card({ data }) {
  return (
    <>
      {data.map((item, i) => (
        <Col key={i} xs={4}>
          <Link to={`/detail/${i}`}>
            <img
              src={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`}
              alt="img"
              width="80%"
            />
            <h4>{item.title}</h4>
            <p>{item.price}원</p>
          </Link>
        </Col>
      ))}
    </>
  );
}
function Event() {
  return (
    <>
      <h2 className="event-title">오늘의 이벤트</h2>
      <Outlet></Outlet>
    </>
  );
}

export default App;
