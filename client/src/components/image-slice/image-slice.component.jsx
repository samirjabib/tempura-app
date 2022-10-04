import { useState } from 'react';
import { backgroundData } from '../../assets/background-hero';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

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
                        md:w-3/5 md:shadow-2xl md:h-[90%] md:top-12 md:rounded-3xl" 
                        />
                        <button>
                            <FiChevronRight 
                            className='absolute right-[5%] top-0 bottom-0  m-auto text-black  bg-transparent hover:bg-yellow-500 rounded-full z-40 shadow-2xl
                                        md:right-[10%] ' 
                            onClick={() => nextSliderHandler(id)}
                            size={40}
                        />
                        </button>
                        <button
                        onClick={() => prevSliderHandler(id)}  
                        >
                            <FiChevronLeft 
                            size={40}
                            className='absolute left-[5%] top-0 bottom-0  m-auto text-black z-40 bg-transparent hover:bg-yellow-500 rounded-full shadow-2xl
                                        md:left-[10%]'/>
                        </button>
                    
                    </div>
                )
            })
        }
        </>
    );
};

export default ImageSlice;