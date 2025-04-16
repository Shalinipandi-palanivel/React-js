import { useState } from "react";

const Counter = () => {

    const[count, setCount] = useState(0);

    const handleDecrease = () => {
        setCount((oldCount) => {
            if(oldCount > 0){
                oldCount--;
                return oldCount;
            };
        });
    };

    const handleIncrease=()=>{
        setCount((oldCount) => {
           oldCount++;
            return oldCount;
        });   
    };

    return (
        
        <div className="counter">
            <button className="counter" onClick={handleDecrease} disabled = {count <= 0}>-</button>
            {count}
            <button className="counter" onClick={handleIncrease}>+</button>             
        </div>
    )
}

export default Counter;

