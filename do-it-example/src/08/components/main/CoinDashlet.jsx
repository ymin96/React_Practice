import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Heading from "../../../doit_ui/Heading";
import Button from "../../../doit_ui/Button";
import Card from "../../../doit_ui/Card";
import InlineList from "../../../doit_ui/InlineList";
import Text from "../../../doit_ui/Text";

class CoinDashlet extends PureComponent {
    render() {
        const { name, priceLabel } = this.props;
        return (
            <Card vertical={4} horizontal={4}>
                <Heading level={4}>
                    {name}
                    <Text>{priceLabel}</Text>
                </Heading>
                <InlineList spacingBetween={1}>
                    <Button primary small>
                        매도
                    </Button>
                    <Button small>매수</Button>
                </InlineList>
            </Card>
        );
    }
}

CoinDashlet.propTypes = {
    name: PropTypes.string,
    priceLabel: PropTypes.string,
};

export default CoinDashlet;
