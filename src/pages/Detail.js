import React from 'react'
import { useEffect, useState } from "react"
import { Nav } from 'react-bootstrap'
import { useParams } from "react-router-dom"


export function Detail({data}){
  let {id}= useParams()
  let [show,setShow]=useState(true)
  let [tab,setTab]=useState(0)

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
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
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
      <TabContent tab={tab}/>
      </>
    )
  }

  function TabContent({tab}){
    return [<div>상세정보입니다</div>,<div>구매 후기입니다</div>,<div>질문 게시판입니다</div>][tab]
  }