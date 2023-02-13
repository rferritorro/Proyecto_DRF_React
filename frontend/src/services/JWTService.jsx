export const JWTGetToken = () => {
    return localStorage.getItem('token')
}
export const JWTPutToken = (token) => {
    return localStorage.setItem('token', token)
}
export const JWTRemoveToken = () => {
    return localStorage.removeItem('token')
}

export default {JWTGetToken, JWTPutToken, JWTRemoveToken};