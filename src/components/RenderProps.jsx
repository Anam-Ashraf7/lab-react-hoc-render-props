import { useState } from "react";


const RenderProps = (props) => {

    const {render} = props

    const [count, setCount] = useState(0);
    
    const handleCount = ()=>{
        setCount(count+1);
    }

    return(
        <div>
            {render(count,handleCount)}
        </div>
    )

}

export default RenderProps