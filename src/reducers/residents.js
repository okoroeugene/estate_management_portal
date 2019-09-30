import constants from '../constants';

export default function residentReducer(state = {}, action) {
    switch (action.type) {
        case constants.REQUEST(constants.RESIDENT_FORM):
            return Object.assign({}, state, {
                isProcessing: true,
                error: undefined
            })
        case constants.REQUEST_SUCCESS(constants.RESIDENT_FORM):
            if (action.payload.data.status == 700) {
                return {
                    ...state,
                    isProcessing: false,
                    error: action.payload.data.message.message
                };
            }
            else if (action.payload.data.status == 200) {
                return {
                    ...state,
                    isProcessing: false,
                    created: true
                };
            }
        case constants.REQUEST_FAILURE(constants.RESIDENT_FORM):
            return Object.assign({}, state, {
                error: `Login failed due to ${action.payload.status}`,
                isProcessing: false
            })
        default:
            return state;
    }
}