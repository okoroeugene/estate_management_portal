import constants from '../constants';
import {
    CALL_API,
    RSAA
} from 'redux-api-middleware';

export const visitorsForm = details => ({
    [RSAA]: {
        endpoint: `${API_URL}/api/visitor`,
        method: 'POST',
        types: [
            constants.REQUEST(constants.VISITORS_FORM),
            {
                type: constants.REQUEST_SUCCESS(constants.VISITORS_FORM),
                payload: (action, state, response) => response.json().then(response => ({
                    token: response.payload.token
                }))
            },
            {
                type: constants.REQUEST_FAILURE(constants.VISITORS_FORM),
                meta: (action, state, res) => {
                    if (res) {
                        return {
                            status: res.status
                        };
                    } else {
                        return {
                            status: 'Network request failed'
                        }
                    }
                }
            }
        ],
        body: JSON.stringify(details),
        options: { timeout: 10000 },
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    }
});