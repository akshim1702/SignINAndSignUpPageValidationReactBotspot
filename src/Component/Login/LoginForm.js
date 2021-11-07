import { useState } from 'react'
import Login from './Login'
import LoginSuccess from './LoginSuccess'

const LoginForm = () => {
    const [isSubmitted,setIsSubmitted] = useState(false)
    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <div>
            {!isSubmitted ? (<Login submitForm={submitForm} />) : (<LoginSuccess/>)}
        </div>
    )
}

export default LoginForm
