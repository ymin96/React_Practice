import React from "react";
import { Route } from "react-router-dom";
import Menu from "./components/Menu";
import RedPage from "./pages/RedPage";
import BluePage from "./pages/BluePage";
import Userspage from "./pages/Userspage";

const App = () => {
    return (
        <div>
            <Menu />
            <hr />
            <Route path="/red" component={RedPage} />
            <Route path="/blue" component={BluePage} />
            <Route path="/users" component={Userspage}/>
        </div>
    );
};

export default App;
