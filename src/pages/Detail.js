import React, { useContext } from 'react'
import { useEffect, useState } from "react"
import { Col, Nav, Row } from 'react-bootstrap'
import { Link, useParams } from "react-router-dom"
import {Context} from './../App.js'
import { useDispatch } from 'react-redux'
import { changeItem } from '../store.js'


export function Detail({data}){
  let dispatch=useDispatch()
  let {id}= useParams()
  let [show,setShow]=useState(true)
  let [tab,setTab]=useState(0)
  let [watchedItem,setWatchedItem] = useState(localStorage.getItem('watched'))

  useEffect(()=>{
    let watched= JSON.parse(localStorage.getItem('watched'))

    const isIdDuplicate = watched.some(item => item.id === id);
     // 중복되지 않으면 watched에 새로운 객체 추가
    if (!isIdDuplicate) {
      watched.push({
        id: id,
        title: data[id].title,
        image: `https://codingapple1.github.io/shop/shoes${Number(id) + 1}.jpg`
      });
      watched= Array.from(watched)
      localStorage.setItem('watched',JSON.stringify(watched))
      setWatchedItem(JSON.stringify(watched))}
    },[])

  useEffect(()=>{
    setTimeout(()=>{
     setShow(false)
    },2000)
  })
    return(
      <>
        {show && <div className="alert alert-warning">2초 이내 구매시 할인</div>}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={`https://codingapple1.github.io/shop/shoes${Number(id)+1}.jpg`} alt="img" width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{data[id]?.title}</h4>
            <p>{data[id]?.content}</p>
            <p>{data[id]?.price}원</p>
            <button className="btn btn-danger" onClick={()=>{
                dispatch(changeItem({id:data[id].id, name:data[id].title , count:1}))}}>주문하기</button> 
          </div>
        </div>
      </div> 
      <div className='my-5'>
        <p><b> 최근 본 상품 </b></p>       
        <Row>
        {JSON.parse(watchedItem).slice(-4).map((item,i)=>     
        <Col key={i} xs={3} >
            <Link to={`/detail/${item.id}`}>
            <img src={item.image} alt="img" width="40%" />
            <h4>{item.title}</h4>
           </Link>
          </Col>
        )}
        </Row>
      </div>
      <Nav variant="tabs" className="my-5" fill defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link onClick={()=>setTab(0)} eventKey="link0">상세정보</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>setTab(1)} eventKey="link1">후기</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>setTab(2)} eventKey="link2">질문</Nav.Link>
          </Nav.Item>
      </Nav>
      <TabContent tab={tab} data={data} id={id}/>
      </>
    )
  }

  function TabContent({tab,data,id}){
    let {stock}= useContext(Context)
    let [addClass,setAddClass]= useState(false)

    //tab 상태가 변할 때마다 코드를 실행시키기 위해 useEffect 사용
    useEffect(()=>{
      setTimeout(() => setAddClass(true), 500);
      return () => setAddClass(false);
      
    },[tab])

    return (
      <div className={`start ${addClass ? 'end': ''}`}>
        {[<div>{data[id].title}의 상세정보입니다<p>재고:{stock[id]}</p></div>,<div>구매 후기입니다</div>,<div>질문 게시판입니다</div>][tab]}
      </div>
    )
  }