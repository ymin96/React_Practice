import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Button from "../04/Button";
import ButtonWithLoadingContext from "./ButtonWithLoadingContext";
import LoadingProvider from "./LoadingProvider";


const TableComponent = () => <ButtonWithLoadingContext label="버튼"/>

class HomePageComponent extends PureComponent {
    
    render() {
        return (
            <LoadingProvider>
                <TableComponent />
                <ButtonWithLoadingContext>상태 변경</ButtonWithLoadingContext>
            </LoadingProvider>
        );
    }
}

HomePageComponent.propTypes = {
    loading: PropTypes.bool,
    setLoading: PropTypes.func,
};

export default HomePageComponent;