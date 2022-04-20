import { COOKIE_ORDER, CUSTOM_ORDER, SIGNATURE_ORDER } from "./actionTypes"

const initalState = {
    signature: {
        flavors: '',
        quantity: 0,
        eventDate: undefined,
        colors: undefined,
    },
    custom: '',
    cookie: '',
    deliveryInfo: {
        name: '',
        phoneNumber: undefined,
        email: '',
        address: '',
        city: '',
        state: '',
        zip: ''
    },
    orderType: ''

}

export default function orderReducer(state = initalState, action) {
    switch (action.type) {
        case COOKIE_ORDER:
            return {
                ...state,
                cookie: action.payload,
                orderType: 'COOKIE'
            }
        case CUSTOM_ORDER:
            return {
                ...state,
                custom: action.payload,
                orderType: 'CUSTOM'
            }
        case SIGNATURE_ORDER:
            return {
                ...state,
                signature: action.payload,
                orderType: 'SIGNATURE'
            }
        default:
            return state

    }
}