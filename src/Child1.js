import React from "react";
import { useContext } from "react";
import { AppContext } from "./context/Usecontext";

const Child1 = () => {
    const userData = useContext(AppContext)
    
  return (
    <div>
      Child = my gen is {userData.gen} and i am {userData.age} years old.{" "}
    </div>
  );
};

export default Child1;
