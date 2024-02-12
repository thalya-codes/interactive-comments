import { Middleware } from "redux"

const KEY = 'comments'

export const persistComments: Middleware  = (store) => (next) => (action) =>  {
    const response = next(action);

    localStorage.setItem(KEY, JSON.stringify(store.getState()));
    
    return response;
}

export const loadComments = <T>(): T | undefined => {
    const comments = localStorage.getItem(KEY);
    
    if (comments === null) return;

    return JSON.parse(comments);
}