import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Issues from "./components/Issues/Issues";
import Wrapper from "./components/Wrapper/Wrapper";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

const App = () => {
    return (
        <div className="App">
            {/* <Navbar /> */}
            <Header />
            <Wrapper>
                <Issues />
            </Wrapper>
            <Footer />
        </div>
    );
};

export default App;
