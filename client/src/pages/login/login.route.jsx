import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { signOut } from "firebase/auth";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

import { firebaseAuth } from '../../utils/firebase/firebase.utils'
import { AiFillEye ,AiFillEyeInvisible } from 'react-icons/ai';

import BackgroundImage from "../../components/background-image/background-image.component";
import Header from "../../components/header/header.component";
import LoginBackground from '../../assets/background-login2.jpg'


const defaultFormFields = {
    email:'',
    password:'',

}

const Login = () => {
    const navigate = useNavigate();
    
    //Register

    const [ formFields, setFormFields ] = useState(defaultFormFields);
    const {  email, password } = formFields;


    const handleChange = (event) => {    
        const { name, value } = event.target;
        setFormFields({...formFields, [name] : value})
    }
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    } 

    const handleSubmit =async (event) => {
        event.preventDefault()
        try {
            await signInWithEmailAndPassword(firebaseAuth, email, password)
        } catch (error) {
            console.log(error)
        }
        resetFormFields();
    }

    //Password hidden and view
    const [showPassword, setShowPassword] = useState(false)
    const [ passwordType, setPasswordType] = useState("password")
    
    const handlePasswordView = (event) => {
        event.preventDefault();
        if(passwordType === "password"){
            setPasswordType("text");
            setShowPassword(true);
            return;
        }
        if(passwordType === "text"){
            setPasswordType("password");
            setShowPassword(false);
        }
    }
    
    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if(currentUser) navigate("/")
        console.log(currentUser)
    })


    const handleRedirectLogin = () => {
        navigate("/sign-up")
    }

    return (
        <div className="relative" >
            <BackgroundImage background={LoginBackground}/>
            <Header/>
            <div className="absolute top-0 left-0 bg-black/20 h-screen w-screen flex flex-col justify-center items-center z-20">
                <div className="min-w-[320px] bg-black/75 text-white text-center relative top-10 lg:min-w-[320px] shadow-2xl rounded-2xl">
                    <div className="mx-auto py-4 text-black" >
                        <h2 className="text-3xl font-bold text-white mb-10 hover:text-yellow-500">Login</h2>
                        <p 
                        className="text-gray-300 relative bottom-7 text-lg ">
                            <span>&#128071;</span>
                        </p>
                        <form className='w-[80%] flex flex-col py-4 z-50 mx-auto text-sm' onSubmit={handleSubmit}>
                            <input 
                            className="py-3 my-2 bg-white rounded p-2"
                            type="text" 
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
                            <button
                            className="bg-yellow-500 py-3 my-6 rounded font-bold relative top-10 text-lg">
                                Get started
                            </button>
                            <h3 className="text-white mt-10 ">
                                <span className="underline">
                                    ¿ Don't have account? 
                                </span>
                                <span 
                                className="text-yellow-500 font-semibold cursor-pointer m-2" 
                                onClick={handleRedirectLogin}>
                                    Register
                                </span>
                            </h3>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;