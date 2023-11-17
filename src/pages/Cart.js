import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Button
 from 'react-bootstrap/Button';
import { changeName } from "../store";


export function Cart(){

let state= useSelector((state)=>{return state})
let dispatch=useDispatch()
    return(
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
        {state.cart.map((item)=>
            <tr className="align-middle">
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.count}</td>
            <td><button 
                    className="alert alert-primary my-0 p-1"
                    onClick={()=>dispatch(changeName())}>+</button></td>
            </tr>
        )}
       
    </tbody>
</Table> 
    )
}