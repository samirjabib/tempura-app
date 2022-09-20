import LoginImg from '../../assets/login-background.jpg'



const BackgroundImage = () => {
    return (
        <div className="h-screen w-screen">
            <img 
            src={LoginImg} 
            alt="background-img"
            className='h-screen w-screen'
            />
        </div>
    );
};

export default BackgroundImage;