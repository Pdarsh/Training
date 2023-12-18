import React, { useState } from "react"

const Closures = () => {
    const [query,setQuery] = useState('')
    const debounce = (fn: Function) => {
        let timer: NodeJS.Timeout;
        return function (...args: any) {
            if (timer) {
                clearTimeout(timer)
            }
            timer = setTimeout(() => {
                fn(...args)
            }, 900)
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(`${event.target.value}`)        
    }

    const search = debounce(handleChange)
    return (
        <div>
            <h2>Closures</h2>

            <h4>Debouncing</h4>
            <input type='text'
                onChange={search}
            ></input>
            <p>{`Fetching - ${query}`}</p>

        </div>
    )
}

export default Closures