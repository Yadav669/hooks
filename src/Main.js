import React from "react";
import App from "./App";
import { AppProvider } from "./context/Usecontext"
import "./index";

ReactDom.create(document.getElementById("root")).render(
    <AppProvider>
        <App/>
    </AppProvider>
)