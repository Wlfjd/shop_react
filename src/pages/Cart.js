import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Button
 from 'react-bootstrap/Button';
import { changeCount, deleteItem } from "../store";


export function Cart(){

let state= useSelector((state)=>{return state})
let dispatch=useDispatch()

    return(
        <>
        <h6>{state.user.name}의 장바구니</h6> 
        <Table>
            <thead>
                <tr> 
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
                {state.cart.map((item,i)=>
                    <tr className="align-middle">
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.count}</td>
                    <td><button 
                            className="alert alert-primary my-0 p-1"
                            onClick={()=>{
                                dispatch(changeCount(item.id))}}>+</button></td>
                    <td><button 
                            onClick={()=>{
                                dispatch(deleteItem(item))}}>🗑</button></td>
                    </tr>
                )}
            
            </tbody>
        </Table>
</> 
    )
}