import { useState } from "react";
import { useNavigate } from "react-router-dom";

import BackgroundImage from "../../components/background-image/background-image.component";
import Header from "../../components/header/header.component";

const defaultFormFields = {
    name:'',
    email:'',
    password:'',
    confirmPassword:'',
}


const SignUp = () => {

    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const [ showPassword, setShowPassword] = useState(false)
    
    const { name, email, password, confirmPassword } = formFields;

    const navigate = useNavigate();

    const handleChange = (event) => {    
        const { name, value } = event.target;
        
        setFormFields({...formFields, [name] : value})
    }
    
    const handleSubmit = () => async(event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert('password do not match');
            return;
        }

        try{
            const { email, password, name } = formFields;
    
            
        }catch(error){
            console.log('user creation encountered an error',error)
        };
    };

    const handleRedirectLogin = () => {
        navigate("/login")
    }

    const handlePasswordView = () => {
        
    }


    return (
        <div className="relative" >
            <BackgroundImage/>
            <Header/>
            <div className="absolute top-0 left-0 bg-black/20 h-screen w-screen flex flex-col justify-center items-center z-20 ">
                <div className="min-w-[320px] bg-black/75 text-white text-center relative top-10 lg:min-w-[520px] shadow-2xl">
                    <div className="mx-auto py-16 text-black" >
                        <span className="text-gray-300 relative bottom-7 text-lg">¿don't have account? <span>&#128071;</span></span>
                        <h2 className="text-3xl font-bold text-white mb-10 hover:text-yellow-500">Sign In</h2>
                        <form onChange={ handleSubmit} className='w-[80%] flex flex-col py-4 z-50 mx-auto'>
                            <input 
                            type="text" 
                            placeholder='Display Name' 
                            name='name' 
                            value={name}
                            required
                            onChange={handleChange}
                            className="py-3 my-2 bg-white rounded p-2"
                            />
                            <input 
                            className="py-3 my-2 bg-white rounded p-2"
                            type="email" 
                            placeholder="Email adress" 
                            name="email" 
                            value={email}
                            required
                            onChange={handleChange}   
                            />
                            <input 
                            className="py-3 my-2 bg-white rounded p-2"
                            type="password" 
                            placeholder="Password" 
                            name="password" 
                            value={password}
                            required
                            onChange={handleChange}
                            />
                            <input 
                            className="py-3 my-2 bg-white rounded p-2"
                            type="password" 
                            placeholder="Confirm password" 
                            name="confirmPassword" 
                            required
                            value={confirmPassword}
                            onChange={handleChange}
                            />
                            <button
                            className="bg-yellow-500 py-3 my-6 rounded font-bold relative top-10 text-lg"> 
                                Get Started
                            </button>
                            <h3 className="text-white mt-10">
                                You have account?  
                                <span 
                                className="text-yellow-500 font-semibold cursor-pointer" 
                                onClick={handleRedirectLogin}>
                                    Login
                                </span>
                            </h3>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;