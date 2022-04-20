import { CUSTOM_ORDER, COOKIE_ORDER, SIGNATURE_ORDER } from "./actionTypes";

export const setSignatureOrder = order => ({
    type: SIGNATURE_ORDER,
    payload: { order }
})