import sendRequest from "./sendRequest";

const BASE_PATH = "/api/apartments";

export function getAll() {
    return sendRequest(BASE_PATH, 'GET');
}

export function show (apartmentsId) {
    return sendRequest(`${BASE_PATH}/${apartmentsId}`, 'GET');
}

export function handleAddApartment (formData) {
    return sendRequest(BASE_PATH, 'POST', formData);
}

export function update (apartmentsId, formData) {
    return sendRequest(`${BASE_PATH}/${apartmentsId}`, 'PUT', formData);
}

export function deleteApartment (apartmentsId) {
    return sendRequest(`${BASE_PATH}/${apartmentsId}`, 'DELETE');
}