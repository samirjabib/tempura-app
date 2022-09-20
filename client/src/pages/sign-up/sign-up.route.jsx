import BackgroundImage from "../../components/background-image/background-image.component";
import Header from "../../components/header/header.component";

const SignUp = () => {
    return (
        <div>
            <BackgroundImage/>
            <Header/>
            <div></div>
            <h1>Unlimited Animes</h1>
            <h4>Watch anywhere. Cancel anytime</h4>
            <h6>Ready to watch? Enter your email to create or restart membership</h6>
            <form>
                <input type="email" placeholder="Email adress" name="email"/>
                <input type="password" placeholder="Password" name="password"/>
                <input type="password" placeholder="Confirm password" name="confirm password"/>
                <button> Get Started</button>
            </form>
        </div>
    );
};

export default SignUp;