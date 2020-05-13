import React from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

class Main extends React.Component {
    render() {
        return (
            <div
                className="main"
                style={{
                paddingLeft: "50px",
                paddingTop: "20px",
                paddingRight: "20px",
                backgroundColor: "black"
            }}>
                <Home/>
                <About/>
                <Projects/>
                <Contact/>
            </div>
        )
    }
}

export default Main;
