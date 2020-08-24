import React, { PureComponent } from "react";
import CoinOverview from "./CoinOverview";
import TransactoinList from "./TransactionList";

class MainPage extends PureComponent{
    render(){
        return(
            <React.Fragment>
                <CoinOverview/>
                <TransactoinList/>
            </React.Fragment>
        )
    }
}

export default MainPage;