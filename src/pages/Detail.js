import { useParams } from "react-router-dom"

export function Detail({data}){
  let {id}= useParams()
    return(
      <div className="container">
    <div className="row">
      <div className="col-md-6">
        <img src={data[id].img} alt="img" width="100%" />
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">{data[id].title}</h4>
        <p>{data[id].content}</p>
        <p>{data[id].price}원</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>
    </div>
  </div> 
    )
  }