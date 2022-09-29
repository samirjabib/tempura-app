import LoginImg from '../../assets/login-background.jpg'



const BackgroundImage = () => {
    return (
        <div className="h-screen w-screen relative">
            <div className='h-screen w-screen bg-black/50 absolute z-10 top-0 left-0'>div negro</div>
            <img 
            src={LoginImg} 
            alt="background-img"
            className='h-screen w-screen object-cover'
            />
        </div>
    );
};

export default BackgroundImage;