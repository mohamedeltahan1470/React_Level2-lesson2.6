import {useContext } from "react";
import ThemeContext from "./context/Datacontext";

const Page2 = () => {
    const {name} = useContext(ThemeContext);
    return (
        <div>
            <h1>welcome to page 2</h1>
            <h2>I am {name}</h2>
        </div>
    );
}

export default Page2;
