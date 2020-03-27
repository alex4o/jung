import { useAsync } from "react-use"


export function wrapPromise(promise) {
    let status = 'pending'
    let response

    const suspender = promise.then(
        (res) => {
            status = 'success'
            response = res
        },
        (err) => {
            status = 'error'
            response = err
        },
    )

    const read = () => {
        switch (status) {
            case 'pending':
                throw suspender
            case 'error':
                throw response
            default:
                return response
        }
    }

    return { read }
}

export function delay(time) {
    new Promise((resolve, reject) => {
        setTimeout(resolve, time)
    });
}


export function usePromise(promise, deps) {
    return useAsync( async () => { return await promise }, deps )
}