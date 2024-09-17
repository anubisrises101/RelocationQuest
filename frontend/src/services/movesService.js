import sendRequest from "./sendRequest";

const BASE_PATH = "/api/moves";

export function getAll() {
    return sendRequest(BASE_PATH, 'GET');
}

export function show (movesId) {
    return sendRequest(`${BASE_PATH}/${movesId}`, 'GET');
}

export function handleAddMove (formData) {
    return sendRequest(BASE_PATH, 'POST', formData);
}