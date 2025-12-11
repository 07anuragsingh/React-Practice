import { useState } from "react"

export default function useToggle(defultValue){
    const [value,setValue]  = useState(defultValue)
    function toggleValue(val){
        if(typeof val != 'boolean'){
            setValue(!value)
        }
        else {
            setValue(val)
        }
    }
        return [value,toggleValue]

}