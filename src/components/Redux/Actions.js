// We will call this "Action Creators in React-Redux."

export function deposit(amount) {
    return { type: 'account/deposit', payload: amount }
}

export function withdraw(amount) {
    return { type: 'account/withdraw', payload: amount }
}

export function nameUpdate(fullName) {
    return { type: 'account/nameUpdate', payload: fullName }
}

export function mobileUpdate(mobile) {
    return { type: 'account/mobileUpdate', payload: mobile }
}

export function reset() {
    return { type: 'account/reset' }
}