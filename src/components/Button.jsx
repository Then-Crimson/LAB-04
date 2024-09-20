import { useState } from "react";

export const Button  = props =>{

    const {text} = props;

    const [count, setcount] = useState(0);

    function handlerButton(){
        setcount(count + 1);
    }

    return(
        <button onClick={handlerButton}>
            {count}
        </button>
    );
}