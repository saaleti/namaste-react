/**
 * <div id="parent">
 *    <div id="child">
 *        <h1> Im h1 tag</h1>
 *    </div>
 * </div> 
 * 
 */


const divParent = React.createElement("div",{"id":"parent"},
    React.createElement("div",{"id":"child"},
        [React.createElement("h1",{}, "Im h1 tag"),React.createElement("h2",{}, "Im h2 tag")]));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(divParent);