import constants from '../constants';
import {
    CALL_API,
    RSAA
} from 'redux-api-middleware';

export const residentForm = details => ({
    [RSAA]: {
        endpoint: `${API_URL}/api/residence`,
        method: 'POST',
        types: [
            constants.REQUEST(constants.RESIDENT_FORM),
            {
                type: constants.REQUEST_SUCCESS(constants.RESIDENT_FORM),
                payload: (action, state, response) => response.json().then(response => ({
                    data: response
                }))
            },
            {
                type: constants.REQUEST_FAILURE(constants.RESIDENT_FORM),
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