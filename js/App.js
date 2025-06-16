
import React from "react";
import ReactDOM from "react-dom/client"

/**
 * <div id="parent">
 *    <div id="child">
 *        <h1> Im h1 tag</h1>
 *    </div>
 * </div> 
 * 
 */

// Creating JSX using function

const FunctionalComponentTitle = () => <h1> This is React Functional Component Title</h1>;


const name ="Swaroop";

const FunctionalComponentHeading = () =>  { return ( 
<div>
{FunctionalComponentTitle()}
<FunctionalComponentTitle/>
<FunctionalComponentTitle></FunctionalComponentTitle>
<h2> This is React Functional Component Heading</h2>
<h3> Hello {name}</h3>
</div>
)};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FunctionalComponentHeading/>);