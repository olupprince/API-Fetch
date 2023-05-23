import { useState } from "react"
import "./Style.css"


function Prince() {
    const[advice, setAdvice] = useState('');

    function Local() {
        fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            const resdata = data.slip
            console.log(resdata.advice)
            setAdvice(resdata.advice);
            
        })
        .catch(error => {
            console.error(`Error: ${error}`);
            });  
    }
    
    return(
        <div id="text">
            <h1>click for advice</h1>
            <p>{advice}</p>
            <button onClick={Local}>click me</button>
        </div>

    )
}



export default Prince