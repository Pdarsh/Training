import React, { useState } from 'react'
import { IForm } from '../../../Models/User';
import './Form.css'




const Form = () => {
    const [inputs, setInputs] = useState<IForm>({
        name: "",
        dob: "",
        email: "",
        password: "",
        state: "",
        university: "",
        checked: false
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { value, name, type } = event.target
        // console.log("name - " + name + "value - " + value);
        setInputs(values => ({ ...values, [name]: type === 'checkbox' ? !inputs["checked"] : value }))
    }


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(inputs)
    }
    return (
        <div className='page-content'>
            <main className='signup-page'>
                <div className='page-heading'>
                    <h1>Create an Account</h1>
                    <p>Already have an account? sign in</p>
                </div>
                <section className='form-section'>
                    <div className='form-container'>
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
                                    value={inputs.email || ""}
                                    onChange={(event) => handleChange(event)}
                                />

                            <label>Password:</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={inputs.password || ""}
                                    onChange={(event) => handleChange(event)}
                                />

                            <label>Sate:</label>
                                <select name="state"
                                    onChange={(event) => handleChange(event)}
                                    value={inputs.state}>
                                    <option value=""></option>
                                    <option value="maharashtra">Maharashtra</option>
                                    <option value="gujrat">Gujrat</option>
                                    <option value="karnatak">Karnatak</option>
                                    <option value="rajasthan">Rajasthan</option>
                                </select>

                            <label>University:</label>
                                <input list="university"
                                    name="university"
                                    onChange={(event) => handleChange(event)}
                                    value={inputs.university} />
                                <datalist id="university">
                                    <option value="maharashtra">Maharashtra</option>
                                    <option value="gujrat">Gujrat</option>
                                    <option value="karnatak">Karnatak</option>
                                    <option value="rajasthan">Rajasthan</option>
                                </datalist>

                            <label>Click if you Agree
                                <input
                                    name='checked'
                                    onChange={(event) => handleChange(event)}
                                    checked={inputs.checked}
                                    type="checkbox" />
                            </label>
                            <input type="submit" />
                        </form>
                    </div>
                    <div className='benifits'>
                        <div>Benift 1</div>
                        <div>Benift 1</div>
                        <div>Benift 1</div>
                        <div>Benift 1</div>
                        <div>Benift 1</div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Form

