import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import Button
 from 'react-bootstrap/Button';


export function Cart(){

let state= useSelector((state)=>{return state})
console.log(state.cart)

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
        {state.cart.map((item)=>(
            <tr className="align-middle">
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.count}</td>
            <td><Button variant="primary">변경 </Button></td>
            </tr>
        ))}
       
    </tbody>
</Table> 
    )
}