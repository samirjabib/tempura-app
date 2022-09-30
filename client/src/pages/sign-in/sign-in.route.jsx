import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { 
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth'

import { firebaseAuth } from '../../utils/firebase/firebase.utils'
import { AiFillEye ,AiFillEyeInvisible } from 'react-icons/ai';

import BackgroundImage from "../../components/background-image/background-image.component";
import Header from "../../components/header/header.component";

const defaultFormFields = {
    name:'',
    email:'',
    password:'',
    confirmPassword:'',
}


const SignIn = () => {
    const navigate = useNavigate();

    //Register
    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const { name, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {    
        const { name, value } = event.target;
        setFormFields({...formFields, [name] : value})
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSignIn = () => async(event) => {
        event.preventDefault();
        if(password !== confirmPassword){
            alert('password do not match');
            return;
        }

        try{
            const { email, password, name } =  formFields;
            alert({email, password, name})
        }catch(error){
            console.log('user creation encountered an error',error)
        };

        resetFormFields();
    };


    //Password hidden and view
    const [showPassword, setShowPassword] = useState(false)
    const [ passwordType, setPasswordType] = useState("password")
    
    const handlePasswordView = (event) => {
        event.preventDefault();
        if(passwordType==="password"){
            setPasswordType("text");
            setShowPassword(true);
            return;
        }
        if(passwordType==="text"){
            setPasswordType("password");
            setShowPassword(false);
        }
    }
    

    const handleRedirectLogin = () => {
        navigate("/login")
    }



    return (
        <div className="relative" >
            <BackgroundImage/>
            <Header/>
            <div className="absolute top-0 left-0 bg-black/20 h-screen w-screen flex flex-col justify-center items-center z-20">
                <div className="min-w-[320px] bg-black/75 text-white text-center relative top-10 lg:min-w-[320px] shadow-2xl rounded-2xl">
                    <div className="mx-auto py-4 text-black" >
                        <h2 className="text-3xl font-bold text-white mb-10 hover:text-yellow-500">Sign In</h2>
                        <p 
                        className="text-gray-300 relative bottom-7 text-lg ">
                            <span className="">¿don't have account? </span>
                            <span>&#128071;</span>
                        </p>
                        <form onChange={ handleSignIn} className='w-[80%] flex flex-col py-4 z-50 mx-auto text-sm'>
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
                            <div className="relative">
                            <input 
                                className="py-3 my-2 bg-white rounded p-2 w-full" 
                                type={passwordType} 
                                placeholder="Password" 
                                name="password" 
                                value={password}
                                required
                                onChange={handleChange}
                            />
                            <button onClick={handlePasswordView}>
                            {showPassword
                                ? 
                                    <AiFillEyeInvisible 
                                    className="absolute top-0  right-4 bottom-0 m-auto"
                                    size={20}
                                    required
                                    />  
                                :
 
                                    <AiFillEye 
                                    className="absolute top-0  right-4 bottom-0 m-auto" 
                                    size={20}
                                    />
                            }
                                
                              
                            </button>
                            
                           

                            </div>
                        

                            <input 
                            className="py-3 my-2 bg-white rounded p-2 "
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
                            <h3 className="text-white mt-10 ">
                                <span className="underline">
                                    You have account?   
                                </span>
                               
                                <span 
                                className="text-yellow-500 font-semibold cursor-pointer m-2" 
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

export default SignIn;