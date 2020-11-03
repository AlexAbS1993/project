import React from 'react';

export const Status = (props) => {
    let changeTemp = (e) => {
        props.changeTemp(e.target.value)
    }
    return (
        <>
            {props.isTyping ? <div><span>Мой статус</span> <input autoFocus={true} onBlur={props.changeReading} onChange={changeTemp} value={props.localestatus} ></input></div> : <p onDoubleClick={props.changeTyping}>Мой статус: {props.status}</p>}
        </>

    )
}