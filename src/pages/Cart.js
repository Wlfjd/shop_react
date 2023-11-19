import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeCount,  deleteItem } from "../store";


export function Cart(){
    let state= useSelector((state)=>{return state})
    let dispatch=useDispatch()
    return(
        <>
        <h6 className="my-4"><strong>{state.user.name}</strong> 의 장바구니</h6> 
        <Table>
            <thead>
                <tr style={{fontSize:'12px'}}> 
                <th>번호</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경</th>
                <th>삭제</th>
                </tr>
            </thead>
            <tbody>
                {state.cart.map((item,i)=>
                    <tr className="align-middle">
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.count}</td>
                    <td><span 
                            onClick={()=>{
                                dispatch(changeCount(item.id))}}>➕</span></td>
                    <td><span 
                            onClick={()=>{
                                dispatch(deleteItem(item))}}>🗑</span></td>
                    </tr>
                )}
            
            </tbody>
        </Table>
</> 
    )
}