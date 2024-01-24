const initialState = {
    count: 0
}

// actions
export const increment = (data) => {
    return { type: "INCREMENT", payload: data }
}
export const decrement = (data) => {
    return { type: "DECREMENT", payload: data }
}

// reducers

export const counterReducer = (initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            initialState.count = initialState.count + action.payload
        case "DECREMENT":
            initialState.count = initialState.count - action.payload
        default:
            initialState;
    }
}

// store
export const CombinedMultiReducer = combineReducers({
    counter: counterReducer,
})

// This is store, will be get into provider's 'store' at the root of page
export const store = createStore(CombinedMultiReducer)

// now, just dispatch the action, rest of work will be execute by automatically


store.dispatch(increment(1))
