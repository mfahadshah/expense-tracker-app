import React from 'react';
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalState'
import './App.css';
import { MDBContainer, MDBRow, MDBCol} from "mdbreact";


function App() {
  return (
    <GlobalProvider>
      <MDBContainer size="sm" className="my-5 "  >
        <MDBRow className="text-center">
          <MDBCol id="shadowDiv" md="6" className=" offset-md-3 bg-white p-3">
            <Header />
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </GlobalProvider>
  );
}

export default App;
