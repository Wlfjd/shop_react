import React from 'react'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export function Detail({data}){
  let {id}= useParams()
  let [show,setShow]=useState(true)

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
      </>
    )
  }