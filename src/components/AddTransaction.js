import React,{useState,useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

import { MDBBtn, MDBBtnGroup, MDBInput } from "mdbreact";


export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState();
    const [btn, setBtn] = useState('');

    const { addTransaction } = useContext(GlobalContext);
    const onSubmit = e => {
        e.preventDefault();
        if (btn==='exp') {
            const newTransaction = {
                id: Math.floor(Math.random() * 100000000),
                text,
                amount: parseFloat(Math.abs(amount) * -1)
            }
            addTransaction(newTransaction);
        }
        else {
            const newTransaction = {
                id: Math.floor(Math.random() * 100000000),
                text,
                amount: parseFloat(Math.abs(amount))
            }
            addTransaction(newTransaction);
        }
        setText('');   //to reset 
        setAmount(''); //to reset
    }
    return (
        <>
            <h3 className="mt-3"><strong>Add Transaction</strong></h3>
            <hr className="w-50" />
            <form onSubmit={onSubmit}>
                <div className="px-5">
                    <MDBInput
                        label="Description"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        required
                        className="mb-2"
                    />
                    <MDBInput
                        label="Amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                        className="mb-2"
                        type="number"
                    />
                </div>
                <MDBBtnGroup className="mt-4">
                    <MDBBtn onClick={()=>setBtn('exp')} type="submit" color="danger" size="lg"><i class="fa fa-arrow-down" aria-hidden="true"></i> Expense</MDBBtn>
                    <MDBBtn onClick={()=>setBtn('inc')} type="submit" color="success" size="lg">Income <i class="fa fa-arrow-up" aria-hidden="true"></i></MDBBtn>
                </MDBBtnGroup>
            </form>
        </>
    )
}
