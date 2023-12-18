import { useState } from "react";
import { useLocalStorage,useSessionStorage,useCookie } from "./StorageHooks";

const WebStorage = () => {
    const [inputs, setInputs] = useState({
        name: "",
        dob: "",
        email: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target
        setInputs(values => ({ ...values, [name]: value }))
    }

    
    const [localStore, setLocalStore] = useLocalStorage("user","")
    const [sessionStore, setSessionStore] = useSessionStorage("user","")
    const [cookie, updateCookie] = useCookie("");
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setLocalStore(JSON.stringify(inputs))
        setSessionStore(JSON.stringify(inputs))
        updateCookie(inputs)        
    }

    let local:any
    let session:any
    if(localStore){
    local = JSON.parse(localStore)
    }

    if(sessionStore){
        session = JSON.parse(sessionStore)
    }

    return (
        <>
            <div><h1>WebStorage</h1></div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={inputs.name || ""}
                    onChange={(event) => handleChange(event)}
                />
                <label>DOB:</label>
                <input
                    type="date"
                    name="dob"
                    value={inputs.dob}
                    onChange={(event) => handleChange(event)}
                />

                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                    value={inputs.email || ""}
                    onChange={(event) => handleChange(event)}
                />
                <input type='submit' />
            </form>

            <div>
                <h4>Local Storage</h4>
                {
                    local ?
                        <>
                            <p>name - {local.name}</p>
                            <p>DOB - {local.dob}</p>
                            <p>email - {local.email}</p>
                        </>
                        : "No local storage found"

                }

            </div>
            <div>
                <h4>Session Storage</h4>
                {
                    session ?
                        <>
                            <p>name - {session.name}</p>
                            <p>DOB - {session.dob}</p>
                            <p>email - {session.email}</p>
                        </>
                        : "No session storage found"

                }
            </div>
            <div>
                <h4>Cookies</h4>
                {
                    !cookie[""]?
                        <>
                            <p>name - {cookie.name}</p>
                            <p>DOB - {cookie.dob}</p>
                            <p>email - {cookie.email}</p>
                        </>
                        : "No cookies found"

                }
            
            </div>
        </>
    )
}

export default WebStorage