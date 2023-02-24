import React, {useState} from "react"
import {Link} from "react-router-dom"
import {ToastContainer,Toast} from "react-toastify"
import axios from "axios"


function Login() {

    const [values, setValues] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const {data} = await axios.post("http://localhost:4000/login", {
                ...values,
            } )
        } catch (err) {
            console.log(err)
        }
    }

  return (
    <div>
        <h2>Login Account</h2>
        <form onSubmit={(e) => handleSubmit(e)}> 
            <div>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    onChange={(e) => 
                        setValues({...values, [e.target.name]: e.target.value})
                    }
                />
            </div>
            <div>
                <label htmlFor="Password">Password</label>
                <input 
                    type="Password" 
                    name="Password" 
                    placeholder="Password" 
                    onChange={(e) => 
                        setValues({...values, [e.target.name]: e.target.value})
                    }
                />
            </div>
            <button type="submit">Submit</button>
            <span>
                Dont have an account? <Link to="/register" >Register</Link>
            </span>
        </form>
        <ToastContainer />
    </div>
  );
}

export default Login;