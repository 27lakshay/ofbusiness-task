import React from "react";

import Issues from "./components/Issues/Issues";
import Wrapper from "./components/Wrapper/Wrapper";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const App = () => {
    return (
        <div className="App">
            <Header />
            <Wrapper>
                <Issues />
            </Wrapper>
            <Footer />
        </div>
    );
};

export default App;
