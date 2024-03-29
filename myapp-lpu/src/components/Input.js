import React from 'react';
import { useDispatch } from 'react-redux';
import * as allActions from '../store/action.js';

export default function Input(){
    const dispatch = useDispatch();
    return (
        <>
        <button onClick={()=> {
            dispatch(allActions.addingAction)
        }}>Add biscuits</button>
        <button onClick={()=>{
            dispatch(allActions.removingAction)
        }}>Remove Biscuits</button>
        </>
    )
}

//Input Component needs an event handler that will dispatch any action which will change the Redux Store.