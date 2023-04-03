addingAction = {
    type:'adding',
    number:5
}

removingAction = {
    type:'removing',
    number : 10
}

export {addingAction, removeingAction}

//This file will have our actions, which will then dispatched by event handlers in react components. After dispatching they will be used by reducers