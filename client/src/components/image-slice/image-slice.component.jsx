import { useState } from 'react';
import { backgroundData } from '../../assets/background-hero';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaPlay, } from 'react-icons/fA';
import { useNavigate } from 'react-router-dom';

const ImageSlice = () => {

    const backgroundImages = backgroundData

    const [ activeSlide, setActiveSlide ] = useState(4);
    
 

    const prevSliderHandler = (id) => {
        if (id === 1) {
          setActiveSlide(backgroundImages.length);
        }
        if(id > 1) {
            setActiveSlide( activeSlide - 1);
        }
      };

      const nextSliderHandler = (id) => {
        if (id === backgroundImages.length) {
          setActiveSlide(1);
        }
        if( id < backgroundImages.length ){
            setActiveSlide(activeSlide + 1)
        }
       
      };

    return (
        <>
            <div className="text-white z-50 absolute top-0 left-0 bottom-0 right-0 m-auto h-10 w-full flex items-center justify-center  flex-col">
                <h1 className='relative bottom-24 md:bottom-16 text-6xl md:text-8xl font-black text-slate-200'><span className='text-yellow-500 text-7xl md:text-9xl'>WTF</span>ANIME</h1>
                <div className='flex  w-52 justify-around text-center align-baseline'>
                    <button className="bg-yellow-500/30 hover:bg-yellow-500  text-black relative w-20 h-12 p-2 rounded shadow-2xl ">
                        <span className='mx-auto'><FaPlay className='mx-auto text-black'/></span>
                    </button>
                    <p className='bg-black/60 w-20 h-12 rounded shadow-md p-1 text-sm cursor-pointer hover:bg-black flex items-center justify-center'>Info</p>
                </div>
                
            </div>
        {
            backgroundImages?.map( (background) => {
                const { id, image, title} = background;

                return(
                    <div 
                    key={ id }
                    className={
                    activeSlide === id
                    ? "relative h-[70%] w-auto top-20 bg-[#fff]"
                    : "hidden"}>
                 
                        <img 
                        src={image}
                        alt={title} 
                        className="
                        w-full h-full relative mx-auto top-0
                        object-cover 
                        md:w-4/5 md:shadow-2xl md:h-[90%] md:top-12 md:rounded-3xl" 
                        />
                        <button>
                            <FiChevronRight 
                            className='absolute right-[5%] top-0 bottom-0  m-auto text-black  bg-black/30 hover:bg-yellow-500 rounded-full z-40 shadow-2xl
                                        md:right-[5%] ' 
                            onClick={() => nextSliderHandler(id)}
                            size={40}
                        />
                        </button>
                        <button
                        onClick={() => prevSliderHandler(id)}  
                        >
                            <FiChevronLeft 
                            size={40}
                            className='absolute left-[5%] top-0 bottom-0 bg-black/30 m-auto text-black z-40  hover:bg-yellow-500 rounded-full shadow-2xl
                                        md:left-[5%]'/>
                        </button>
                    
                    </div>
                )
            })
        }
        </>
    );
};

export default ImageSlice;