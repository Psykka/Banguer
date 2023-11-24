'use client'

import { useEffect } from "react";

// popup window will close after login
export default function Callback() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search)

            window.opener.postMessage({
                type: 'token',
                payload: JSON.stringify({
                    access_token: params.get('access_token'),
                    refresh_token: params.get('refresh_token'),
                    type: params.get('type'),
                    expires_in: params.get('expires_in'),
                })
            }, window.location.origin)
        }
    }, [])

    return (
        <div>
            <h1>Redirecting...</h1>
        </div>
    )
}