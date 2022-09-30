import { GiHamburgerMenu } from 'react-icons/gi'
import Logo from '../../assets/logo-tempura-anime.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="absolute top-0 bg-amber-400 w-screen h-20 flex justify-between items-center p-4 text-white z-50">
          
            <Link to="/" className=" text-black cursor-pointer  hover:text-yellow-800 duration-500" onClick={() => console.log("hice click")}>
                <img 
                    src={Logo} 
                    alt='logo'
                    className='w-12 p-2 mx-auto'
                    />
                <h1 className=" font-bold text-xs  relative -top-2">Tempura</h1>  
            </Link>
        
            
            <ul className=' text-black font-medium md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500'>
                <li className='mx-2'>
                    <Link to='#' className='text-xl hover:text-yellow-900 duration-500'>
                        Sign Up
                    </Link>
                </li>
                <li className='mx-2'>
                    <Link to='#' className='text-xl hover:text-yellow-900 duration-500'>
                        Login
                    </Link>
                </li>
               
                <li className='mx-2'>
                    <Link to='#' className='text-xl hover:text-yellow-900 duration-500'>
                        Animes
                    </Link>
                </li>
               
                <li className='mx-2'>
                    <Link to='#' className='text-xl hover:text-yellow-800 duration-500'>
                        My Anime List
                    </Link>
                </li>
               
            
            </ul>
            <GiHamburgerMenu className='relative top-2 sm:hidden hover:duration-500 text-black' size={30} />
        </div>
    );
};

export default Header;