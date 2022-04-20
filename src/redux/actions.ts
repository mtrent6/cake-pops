import { CUSTOM_ORDER, COOKIE_ORDER, SIGNATURE_ORDER } from "./actionTypes";

export const setSignatureOrder = order => ({
    type: SIGNATURE_ORDER,
    payload: { order }
})

export const setCookiesOrder = order => ({
    type: COOKIE_ORDER,
    payload: order
})

export const setCustomOrder = order => ({
    type: CUSTOM_ORDER,
    payload: order
})