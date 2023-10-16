const initStateTest = {
    username: 'ho tuan phat'
}

const reducerTest = (state = initStateTest, action) => {

    switch (action.type) {
        case "event-call-log":
            return { username: action.payload}
            break;
        case "event-hidden-log":
            return { username: action.payload}
            break;

        default:
            return{...state}
            break;
    }
}

export default reducerTest;