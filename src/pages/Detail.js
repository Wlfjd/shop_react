import React, { useContext } from 'react'
import { useEffect, useState } from "react"
import { Nav } from 'react-bootstrap'
import { useParams } from "react-router-dom"

import {Context} from './../App.js'
import { useDispatch, useSelector } from 'react-redux'
import { changeItem } from '../store.js'


export function Detail({data}){
  let state2= useSelector((state)=>{return state})
  let dispatch=useDispatch()

  let {stock}= useContext(Context)

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
            <button className="btn btn-danger" onClick={()=>{
              console.log(data[id])
                dispatch(changeItem({id:data[id].id, name:data[id].title , count:1}))}}>주문하기</button> 
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
      <TabContent tab={tab} data={data}/>
      </>
    )
  }

  function TabContent({tab,data}){
    let {stock}= useContext(Context)
    let [addClass,setAddClass]= useState(false)

    //tab 상태가 변할 때마다 코드를 실행시키기 위해 useEffect 사용
    useEffect(()=>{
      setTimeout(() => setAddClass(true), 500);
      return () => setAddClass(false);
      
    },[tab])

    return (
      <div className={`start ${addClass ? 'end': ''}`}>
        {[<div>{data[0].title}상세정보입니다{stock}</div>,<div>구매 후기입니다</div>,<div>질문 게시판입니다</div>][tab]}
      </div>
    )
  }