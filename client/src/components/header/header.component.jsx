import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../../assets/logo-tempura-anime.png'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai'


const Header = () => {

    let links = [
        { name:"Home", to:"/"},
        { name:"Login", to:"/login"},
        { name:"Sign Up", to:"/sign-up"},
        { name:"Favorite Animes", to:"/sign-up"},
    ]

    const [open, setOpen] = useState(false);
    const [menu, setMenu ] = useState(false)
    

    const handleMenu = () => {
        setOpen(!open)
        setMenu(!menu)
        return;
    }

    return (
        <div className="absolute top-0 bg-amber-400 w-screen h-20 flex justify-between items-center p-4 text-white z-50">
            <Link 
            to="/" 
            className=" text-black cursor-pointer  hover:text-yellow-800 duration-500"
            onClick={() => console.log("hice click")}
            >
                <img 
                    src={Logo} 
                    alt='logo'
                    className='w-12 p-2 '
                    />
                <h1 className=" font-bold text-xs  relative -top-2">Tempura</h1>  
            </Link>

            <ul 
            className={`
                        md:bg-inherit md:flex md:items-center md:w-auto md:static md:h-auto
                        md:opacity-100 md:z-auto 
                        bg-black/90 auto z-[-10] shadow-2xl
                        absolute left-0 w-full py-0 md:pl-0 pl-7 top-20 
                        h-auto
                        transition-all ease-out duration 500 ${open ? 'top-20': 'top-[-400px]'}`}>
                {
                    links.map( (link) => {
                        return(
                        <li className={`md:ml-7 text-xl md:my-0 my-7 block text-center ${open ? "text-white" : "text-black"}`} key={link.name}>
                            <Link to={link.to} className='text-xl mx-auto hover:text-yellow-900 duration-500 ' key={link.name}>
                                {link.name}
                            </Link>
                        </li>
                        )
                    })
                }
            </ul>
            { menu
                ? <AiFillCloseCircle 
                    size={40} 
                    className="text-red-600 md:hidden cursor-pointer "
                    onClick={handleMenu}
                />
                : <GiHamburgerMenu 
                    size={40} 
                    className="text-black md:hidden cursor-pointer"
                    onClick={handleMenu}
                    />
            }
            
        </div>
    );
};

export default Header;