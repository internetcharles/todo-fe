import request from 'superagent';

const URL = process.env.REACT_APP_API_URL;

export function signUp(userData) {
    try {
        return request.post(`${URL}/auth/signup`, userData) }
    catch (e) {
        console.log(e.message);
        }
}

export function signIn(userData) {
    try {
        return request.post(`${URL}/auth/signin`, userData) }
    catch (e) {
        console.log(e.message);
        }
}

export function fetchTodos() {
    const token = localStorage.getItem('token');

    try {
        return request
            .get(`${URL}/api/todos`)
            .set('Authorization', token);
    } catch(e) {
        return { error: e.message };
    }
}

export function createTodo(userData) {
    const token = localStorage.getItem('token');

    try {
        return request
            .post(`${URL}/api/todos`, userData)
            .set('Authorization', token);
    }
    catch (e) {
        return { error: e.message };
    }
}

export function updateTodo(id, userData) {
    const token = localStorage.getItem('token');

    try {
        return request
            .put(`${URL}/api/todos/${id}`, userData)
            .set('Authorization', token);
    }
    catch (e) {
        return { error: e.message };
    }
}

export function deleteTodo(id) {
    const token = localStorage.getItem('token');

    try {
        return request
            .delete(`${URL}/api/todos/${id}`)
            .set('Authorization', token);
    }
    catch (e) {
        return { error: e.message };
    }
}