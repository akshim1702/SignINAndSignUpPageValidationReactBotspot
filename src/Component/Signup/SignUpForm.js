import { useState }  from 'react'
import SignUp from './SignUp'
import SignUpSuccess from './SignUpSuccess'
const SignUpForm = () => {
    const [isSubmitted,setIsSubmitted] = useState(false)
    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <div>
            {!isSubmitted ? (<SignUp submitForm={submitForm} />) : (<SignUpSuccess/>)}
        </div>
    )
}

export default SignUpForm
