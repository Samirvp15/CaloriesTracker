import { useContext } from "react"
import { ActivityContext } from "../context/ActivityContext"



export const useActivity = () => {
    const context = useContext(ActivityContext)
    if (!context) {
        throw new Error('hook debe estar dentro de ActivityProvider')
    }

    return context
}