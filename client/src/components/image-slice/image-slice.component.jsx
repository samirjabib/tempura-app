import { useState } from 'react';
import { backgroundData } from '../../assets/background-hero';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const ImageSlice = () => {


    const [ activeSlide, setActiveSlide ] = useState(1);

    const prevSliderHandler = (id) => {
        if( id === 1) {
            setActiveSlide(backgroundData.length);
        }
        if( id > 1) {
            setActiveSlide(activeSlide - 1);
        }
        else{
            setActiveSlide.length(-1);
        }
    }

    const nextSliderHandler = () => {
        if( id ===  backgroundData.length ){
            setActiveSlide(1);
        }
        if( id < backgroundData.length) {
            setActiveSlide(activeSlide + 1 )
        }
        else{
            setActiveSlide(backgroundData.length - 1);
        }
    }

   

    return (
        <>
        {
            backgroundData.map( (background) => {
                const { id, image, title} = background;



                return(
                    <div 
                    key={ id }
                    className={
                    activeSlide === id
                    ? "relative h-[70%] w-auto top-20"
                    : "hidden"}>
                 
                        <img 
                        src={image}
                        alt={title} 
                        className="
                        w-full bg-blue-600 h-full relative mx-auto 
                        md:w-3/5" 
                        />
                        <button>
                            <FiChevronRight 
                            className='absolute right-[5%] top-0 bottom-0  m-auto text-yellow-500 z-50 bg-red-500
                                        md:right-[10%]' 
                            onClick={nextSliderHandler}
                            size={40}
                        />
                        </button>
                        <button
                        onClick={prevSliderHandler}  
                        >
                            <FiChevronLeft 
                            size={40}
                            className='absolute left-[5%] top-0 bottom-0  m-auto text-yellow-500 z-50 bg-red-500
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