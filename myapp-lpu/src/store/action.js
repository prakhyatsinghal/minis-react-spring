const addingAction = {
    type:'adding',
    number:5
}

const removingAction = {
    type:'removing',
    number : 10
}

export {addingAction, removingAction}

//This file will have our actions, which will then dispatched by event handlers in react components. 
//After dispatching they will be used by reducers