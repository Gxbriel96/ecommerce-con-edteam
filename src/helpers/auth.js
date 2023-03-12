import { TOKEN_NAME } from "../../env"

export const getToken = () => localStorage.getItem(TOKEN_NAME)

export const setToken = (token) => localStorage.setItem(TOKEN_NAME, token)

export const deleteToken = () => localStorage.removeItem(TOKEN_NAME)

export const clearLocal = () => localStorage.clear()
