import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/body";

function Githubprofile()
{
    return (
    <div>

        <Header></Header>
        <Body></Body>
        
    </div>
        
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Githubprofile></Githubprofile>);

export default Githubprofile;