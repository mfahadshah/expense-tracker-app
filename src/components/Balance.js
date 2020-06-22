import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'


export const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(0);
    const color = () => {
        if (total > 0) {
            return "text-success";
        }
        else if (total < 0) {
            return "text-danger";
        }
        else
            return "text-info";
    }

    return (
        <>
            <h3><strong>Your Balance</strong></h3>
            <h2><strong className={color()}>{total} Rs.</strong></h2>
        </>
    )
}
