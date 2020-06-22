import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState'
import {MDBListGroupItem} from "mdbreact";

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = (transaction.amount > 0) ? '+' : '';
    const color = (transaction.amount >= 0) ? 'greenb': 'redb';
    return (
        <MDBListGroupItem className={`listItem d-flex justify-content-between align-items-center `+color}>
            <a href onClick={() => deleteTransaction(transaction.id)} className="delete-btn text-danger btn-sm mr-4"><i class="fa fa-trash fa-lg"></i></a><strong className="mr-auto">{transaction.text}</strong> <span>{sign}{transaction.amount} Rs.</span>
        </MDBListGroupItem>
    )
}