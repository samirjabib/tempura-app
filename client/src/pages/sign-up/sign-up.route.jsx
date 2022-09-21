import BackgroundImage from "../../components/background-image/background-image.component";
import Header from "../../components/header/header.component";

const SignUp = () => {
    return (
        <div className="relative">
            <BackgroundImage/>
            <Header/>
            <div className="absolute top-0 left-0 bg-black/20 h-screen w-screen flex flex-col justify-center items-center ">
                <div className="max-w-[300px] h-[500px] bg-black/75 text-white text-center relative top-10">
                    <div className="max-w-[320px] mx-auto py-16 " >
                        <h2 className="text-3xl font-bold">Sign In</h2>
                        <form>
                            <input type="text" placeholder='Display Name' name='name'/>
                            <input type="email" placeholder="Email adress" name="email"/>
                            <input type="password" placeholder="Password" name="password"/>
                            <input type="password" placeholder="Confirm password" name="confirm password"/>
                            <button> Get Started</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;