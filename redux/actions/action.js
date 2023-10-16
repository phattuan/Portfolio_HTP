export const showLog = (value) => {
    return {
        type: 'event-call-log',
        payload: value
    }
}
export const hiddenLog = (value) => {
    return {
        type: 'event-hidden-log',
        payload: value
    }
}