import React from 'react'
import './SignUp.css';
import { Link } from "react-router-dom";
import useForm from './useForm'
import validate from './validateInfo'
import { useEffect, useState } from 'react'
const SignUp = ({ submitForm }) => {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);
    const [submit, setSubmit] = useState(false);
    const [email, setEmail] = useState(true);
    const [name, setName] = useState(true);
    const [password, setPassword] = useState(true);
    const [cnfPass, setcnfPass] = useState(true);
    const [birthDate, setbirthDate] = useState(true);
    const updateColor = () => {
        if (values.email.length === 0) {
            setEmail(false);
        }
        else {
            setEmail(true)
        }
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
        if (values.cnfPass.length === 0) {
            setcnfPass(false);
        }
        else {
            setcnfPass(true)
        }
        if (values.birthDate.length === 0) {
            setbirthDate(false);
        }
        else {
            setbirthDate(true)
        }


    }
    useEffect(() => {
        if (submit === true) {
            updateColor();
            setSubmit(!submit);
        }
    }, [submit]);

    return (
        <div className="signUpBody">
            <div className="card">
                <div className="card-sub">
                    <form action="" onSubmit={handleSubmit}>
                        <span className="login-1">Register yourself</span>
                        <div className="align">
                            <div className="user-name">
                                <p><label htmlFor="email">Enter your Email:</label></p>
                                <input type="email" name="email" id="email" style={email ? { borderBottom: '1px solid black' } : { borderBottom: '1px solid red' }} value={values.email} onChange={handleChange} placeholder="enter your email here" />
                                {errors.email && <p className="color">{errors.email}</p>}
                            </div>
                            <div className="user-name">
                                <p><label htmlFor="name">UserName</label></p>
                                <input type="text" name="name" id="name" value={values.name} style={name ? { borderBottom: '1px solid black' } : { borderBottom: '1px solid red' }} onChange={handleChange} placeholder="enter your User Name here" />
                                {errors.name && <p className="color">{errors.name}</p>}
                            </div>
                            <div className="pass">
                                <p><label htmlFor="password">Password</label></p>
                                <input type="password" value={values.password} onChange={handleChange} style={password ? { borderBottom: '1px solid black' } : { borderBottom: '1px solid red' }} minLength="8" name="password" id="password" placeholder="enter your password here" />
                                {errors.password && <p className="color">{errors.password}</p>}
                            </div>
                            <div className="pass">
                                <p><label htmlFor="cnfPass">Confirm Password</label></p>
                                <input type="password" minLength="8" value={values.cnfPass} onChange={handleChange} style={cnfPass ? { borderBottom: '1px solid black' } : { borderBottom: '1px solid red' }} name="cnfPass" id="cnfPass" placeholder="Confirm your password" />
                                {errors.cnfPass && <p className="color">{errors.cnfPass}</p>}
                            </div>
                            <div className="DOB">
                                <p><label htmlFor="birthDate">Date of Birth</label></p>
                                <input type="date" name="birthDate" id="birthDate" value={values.birthDate} style={birthDate ? { borderBottom: '1px solid black' } : { borderBottom: '1px solid red' }} onChange={handleChange} />
                                {errors.birthDate && <p className="color">{errors.birthDate}</p>}
                            </div>
                            <div className="btn-deg">
                                <div className="login-btn">
                                    <div className="login-btn-sub"></div>
                                    <button type="submit" onClick={() => { setSubmit(!submit) }} >Register</button>
                                </div>
                            </div>
                            <div className="Login">
                                <p>Already have an account?</p>
                                <Link to='/Login'>Login</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp
