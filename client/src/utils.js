import { useAsync } from "react-use"
import { Skeleton } from "antd"
import React from "react";

/**
 * 
 * @param {Promise<Any>} promise 
 */
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

export function Loadable(props) {
	let Component = Skeleton
	if(props.component) {
		Component = props.component
	} 

    let loaded = () => {}
    if(props.loaded) {
        loaded = props.loaded
    }

	return <Component {...props} loading={props.loading}>
		{ props.loading ? <></> : loaded() }
	</Component>
	
}

export function usePromise(promise, deps) {
    return useAsync( async () => { return await promise }, deps )
}