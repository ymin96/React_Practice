import React, { PureComponent } from "react";
import Heading from "../../../doit_ui/Heading";
import Card from "../../../doit_ui/Card";

import TransactionSearchFilterContainer from '../../containers/main/TransactionSearchFilterContainer'
import TransactionTable from "./TransactionTable";
import Api from "../../API";

class TransactionList extends PureComponent {
    componentDidMount() {
        Api.get("/transactions").then(({ data }) =>
            this.props.setTransactionList(data)
        );
    }

    render() {
        const { transactions } = this.props;
        return (
            <div>
                <Heading level={3}>거래 현황</Heading>
                <Card vertical={4} horizontal={4}>
                    <TransactionSearchFilterContainer />
                </Card>
                <Card>
                    <TransactionTable transactions={transactions} />
                </Card>
            </div>
        );
    }
}

TransactionList.defaultProps = {
    transactions: [],
    setTransactoinList: () => {},
};

export default TransactionList;
