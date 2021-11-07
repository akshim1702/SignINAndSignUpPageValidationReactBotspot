import './Login.css'
import { Link } from "react-router-dom";
import useLoginForm from './useLoginForm'
import ValidateLoginInfo from './ValidateLoginInfo'
import { useState, useEffect } from 'react'

const Login = ({ submitForm }) => {
    const { handleChange, values, handleSubmit, errors } = useLoginForm(submitForm, ValidateLoginInfo);
    const [submit, setSubmit] = useState(false);
    const [name, setName] = useState(true);
    const [password, setPassword] = useState(true);
    const updateColor = () => {
        if (values.name.length === 0) {
            setName(false);
        }
        else {
            setName(true)
        }
        if (values.password.length === 0) {
            setPassword(false);
        }
        else {
            setPassword(true)
        }
    }
    useEffect(() => {
        if (submit === true) {
            updateColor();
            setSubmit(!submit);
        }
    }, [submit]);

    const show = () => {
        const x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    return (
        <>
            <div className='LoginBody'>
                <div className="cardLogin">
                    <div className="card-sub-Login">
                        <form className='form-Login' onSubmit={handleSubmit} action="">
                            <span className="login-1">LOGIN</span>
                            <div className="align">
                                <div className="user-name">
                                    <p><label htmlFor="name">User Name</label></p>
                                    <input type="text" name="name" id="name" value={values.name} style={name ? { borderBottom: '1px solid black' } : { borderBottom: '1px solid red' }} onChange={handleChange} placeholder="enter your name here" />
                                    {errors.name && <p className="color">{errors.name}</p>}

                                </div>
                                <div className="pass">
                                    <p><label htmlFor="password">Password</label></p>
                                    <input type="password" minLength='8' name="password" id="password" value={values.password} style={password ? { borderBottom: '1px solid black' } : { borderBottom: '1px solid red' }} onChange={handleChange} placeholder="enter your password here" />
                                    {errors.password && <p className="color">{errors.password}</p>}
                                </div>
                                <div className="forget-sec">
                                    <div>
                                        <input type="checkbox" name="show_pass" id="show_pass" onClick={()=>{show()}} />
                                        <p>Show Password</p>
                                    </div>
                                    <a href="#">Forget Password?</a>
                                </div>
                                <div className="btn-deg">
                                    <div className="login-btn">
                                        <div className="login-btn-sub"></div>
                                        <button className='LoginBtn' type='submit' onClick={() => { setSubmit(!submit) }}>LOGIN</button>
                                    </div>
                                </div>
                                <div className="sign-up">
                                    <Link to='/'>Sign Up</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
