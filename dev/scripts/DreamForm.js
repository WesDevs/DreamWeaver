import React from 'react';

const DreamForm = (props) => {
    
    return (

        <li>
            <button onClick = {() => props.removeDream(props.firebaseKey)}>X</button>
            <p>{props.date}</p>
            <p>{props.dream}</p>

        </li>
        
    )

}

export default DreamForm;