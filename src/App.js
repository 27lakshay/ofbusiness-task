import React from "react";

import Issues from "./components/Issues/Issues";
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";

const App = () => {
    return (
        <div className="App">
            <Header />
            <Wrapper>
                <Issues />
            </Wrapper>
        </div>
    );
};

export default App;
