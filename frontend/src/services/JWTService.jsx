export const JWTGetToken = () => {
    return localStorage.getItem('token')
}
export const JWTGetTokenRef = () => {
    return localStorage.getItem('token_ref')
}
export const JWTPutToken = (token) => {
    return localStorage.setItem('token', token)
}
export const JWTPutTokenRef = (token) => {
    return localStorage.setItem('token_ref', token)
}
export const JWTRemoveTokenRef = () => {
    return localStorage.removeItem('token_ref')
}
export const JWTRemoveToken = () => {
    return localStorage.removeItem('token')
}

export default {JWTGetToken, JWTPutToken, JWTRemoveToken, JWTPutTokenRef, JWTRemoveTokenRef, JWTGetTokenRef};