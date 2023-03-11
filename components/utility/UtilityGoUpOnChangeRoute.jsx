'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function UtilityGoUpOnChangeRoute() {
    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = () => {
            window.scrollTo(0, 0)
        }

        router.events.on('routeChangeStart', handleRouteChange)

        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [])

    return null
}
