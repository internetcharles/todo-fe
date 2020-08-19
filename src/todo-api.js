import request from 'superagent';

const URL = process.env.REACT_APP_API_URL;

export function signUp(userData) {
    try {
        return request.post(`${URL}/auth/signup`, userData) }
    catch (e) {
        console.log(e.message);
        }
}
