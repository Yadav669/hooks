import React, { useState, useEffect } from "react";
import "./Effect.css";

const Effect = () => {
    const [count, setCount] = useState(0);
    
    const countUpdate = (val) =>{
        if (val === "inc") return setCount(count + 1);
        if (val === "dec") return setCount(count - 1);
    }

    useEffect(() =>{
        document.title = count;
    },[count])
  return(
    <div className="container">
        <button onClick={() =>countUpdate("inc")}>+</button>
        <h2>{count}</h2>
        <button onClick={() =>countUpdate("dec")}>-</button>
    </div>
  )
};

export default Effect;
