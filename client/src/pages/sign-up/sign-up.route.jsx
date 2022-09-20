import BackgroundImage from "../../components/background-image/background-image.component";
import Header from "../../components/header/header.component";

const SignUp = () => {
    return (
        <div className="relative">
            <BackgroundImage/>
            <Header/>
            <div className="absolute top-0 left-0 bg-black/20 h-screen w-screen flex flex-col justify-center items-center ">
    
                <div className="bg-white">
                    <h1>Unlimited Animes</h1>
                    <h4>Watch anywhere. Cancel anytime</h4>
                    <h6>Ready to watch? Enter your email to create or restart membership</h6>
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
    );
};

export default SignUp;