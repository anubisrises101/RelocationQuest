import sendRequest from "./sendRequest";

const BASE_PATH = "/api/moves";

export function getAll() {
    return sendRequest(BASE_PATH, 'GET');
}

export function show (moveId) {
    return sendRequest(`${BASE_PATH}/${moveId}`, 'GET');
}

export function handleAddMove (formData) {
    return sendRequest(BASE_PATH, 'POST', formData);
}