import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import videoAnime from '../../assets/video-anime.mp4'

const Player = () => {
    const navigate = useNavigate(-1)

    return (
        <div className="w-screen h-screen bg-red-500">
                <div className="absolute p-8 z-50 text-white cursor-pointer">
                    <BsArrowLeft 
                    
                    size={50} 
                    onClick={ () => navigate(-1)}/>
                </div> 
                <video 
                className="w-full h-full object-fill"
                src={videoAnime} 
                autoPlay 
                loop 
                controls 
                muted>
                </video>
        </div>
    );
};

export default Player;