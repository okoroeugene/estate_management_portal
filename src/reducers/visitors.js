import constants from '../constants';

export default function visitorReducer(state = {}, action) {
    switch (action.type) {
        case constants.REQUEST(constants.VISITORS_FORM):
            return Object.assign({}, state, {
                isProcessing: true,
                error: undefined
            })
        case constants.REQUEST_SUCCESS(constants.VISITORS_FORM):
            return {
                ...state,
                isProcessing: false,
                token: action.payload.token
            };
        case constants.REQUEST_FAILURE(constants.VISITORS_FORM):
            return Object.assign({}, state, {
                error: `Login failed due to ${action.payload.status}`,
                isProcessing: false
            })
        default:
            return state;
    }
}