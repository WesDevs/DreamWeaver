import React from 'react';

const DreamForm = (props) => {
    
    return (

        <li>
            <button onClick = {() => props.removeDream(props.firebaseKey)}>X</button>
            <h4>{props.date}</h4>
            <p>{props.dream}</p>

        </li>
        
    )

}

export default DreamForm;