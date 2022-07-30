import {useState} from 'react';
import axios from 'axios';

const FormComponent = () => {

    const [name, setName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log({name, email, password})
        // try{
        //     const response = await axios.post('http://localhost:4000/api/signup', { name, email, password}) //via API
        //     if(response){
        //         console.log("Success: ",response.data);
        //     }
        // }catch(error){
        //     console.log('Error: ', error)
        // }

        axios.post('http://localhost:4000/api/signup', { name, email, password}).then(response => {
            console.log("Normal Form -> Callback Success: ",response.data);
        }).catch(error => {
            console.log("Error: ", error)
        })
    };

    const handleEmail = (event) => {
        setemail(event.target.value);
    };

    const handleName = (event) => {
        setName(event.target.value);
    };

    const handlePassword = (event) => {
        setpassword(event.target.value);
    };

    return (
        <div>
            <h1>Simple Form Component</h1>
            <form className="register-form" onSubmit={handleSubmit}>
                <div>
                    <span>Name: </span>
                    <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={handleName}
                />
                </div>
                <div>
                    <span>Email: </span>
                    <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={handleEmail}
                />
                </div>
                <div>
                    <span>Password: </span>
                    <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Your password"
                    value={password}
                    onChange={handlePassword}
                />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default FormComponent;