import React, { useContext } from 'react'
import { Transaction } from './Transaction'
import { GlobalContext } from '../context/GlobalState'
import { MDBListGroup } from "mdbreact";

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    let emptyMsg = "";
    if (transactions.length === 0) {
        emptyMsg = "Add Transactions to show in History";
    }
    return (
        <>
            <h3><strong>History</strong></h3>
            <hr className="w-50" />
            <strong className="text-primary">{emptyMsg}</strong>
            
            <MDBListGroup >
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
            </MDBListGroup>
        </>
    )
}
