import React from "react"
import ReactDOM from "react-dom/client"

const parent = React.createElement("div",{id:"parent"},
    [
        React.createElement("div",{id:"child1"},
            [
                React.createElement("h1",{},"I am Child1."),
                React.createElement("h2",{},"I am Child2.")
            ]
        ),
        React.createElement("div",{id:"child2"},
            [
                React.createElement("h1",{},"I am Child 1."),
                React.createElement("h2",{},"I am Child 2.")
            ]
        )
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)