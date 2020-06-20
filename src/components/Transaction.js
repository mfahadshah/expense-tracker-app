import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState'

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = (transaction.amount > 0) ? '+' : '';
    const color = (transaction.amount > 0) ? 'plus' : 'minus';
    return (
        <li className={color}>
            {transaction.text} <span>{sign}{transaction.amount} Rs.</span>
            <button onClick={()=>deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    )
}
