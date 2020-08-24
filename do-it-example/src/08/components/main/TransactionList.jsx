import React, { PureComponent } from "react";
import Heading from "../../../doit_ui/Heading";
import Card from "../../../doit_ui/Card";

import TransactionSearchFilter from "./TransactionSearchFilter";
import TransactionTable from "./TransactionTable";
import Api from "../../API";

class TransactionList extends PureComponent {
    state = {
        transactions: [],
    };

    componentDidMount() {
        Api.get("/transactions", { param: { code: "BTX" } }).then((response) =>
            this.setState({ transactions: response.data })
        );
    }

    render() {
        const { transactions } = this.state;
        return (
            <div>
                <Heading level={3}>거래 현황</Heading>
                <Card vertical={4} horizontal={4}>
                    <TransactionSearchFilter />
                </Card>
                <Card>
                    <TransactionTable transactions={transactions} />
                </Card>
            </div>
        );
    }
}

export default TransactionList;
