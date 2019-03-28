const citiesReducer = (state=[], action) => {
    switch(action.type) {
        case "ADD_CITY":
            state.push(action.city)
            return state
        case "DELETE_CITY":
            state.shift()
            return state
        default:
            return state
    }
}

export default citiesReducer