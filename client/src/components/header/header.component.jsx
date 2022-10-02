import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../../assets/logo-tempura-anime.png'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { AiFillCloseCircle, AiOutlineLogout } from 'react-icons/ai'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { firebaseAuth } from '../../utils/firebase/firebase.utils';


const Header = () => {

    let links = [
        { name:"Home", to:"/" ,id:1},
        { name:"Login", to:"/login" ,id:2},
        { name:"Register", to:"/sign-up" ,id:3},
        { name:"Favorites", to:"/sign-up" ,id:4},
        <button></button>
    ]

    const [open, setOpen] = useState(false);
    const [menu, setMenu ] = useState(false)
    

    const handleMenu = () => {
        setOpen(!open)
        setMenu(!menu)
        return;
    }


    const handleLogout = () => {
        signOut(firebaseAuth);
    }

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if(currentUser) navigate("/")
        console.log(currentUser)
    })

    console.log(firebaseAuth)



    return (
        <div className="absolute top-0 bg-amber-400 w-screen h-20 flex justify-between items-center p-4  z-50 shadow-2xl">
        
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
                        bg-black/90 auto z-[-10] 
                        absolute left-0 w-full py-0 md:pl-0 pl-7 
                        h-auto 
                        transition-all ease-in duration 500 ${open ? 'top-20': 'top-[-400px]'}`}>
                {
                    links.map( (link) => {
                        return(
                        <li className={`md:ml-7 text-xl md:my-0 my-7 block text-center ${open ? "text-white" : "text-black"}`} key={link.id}>
                            <Link to={link.to} className='text-lg  mx-auto hover:text-yellow-900 duration-500 ' key={link.name}>
                            
                                {link.name}
                            </Link>
                            
                        </li>
                        
                        )
                    })
                    
                }
                <AiOutlineLogout className={firebaseAuth ? `text-red-600 w-full  my-5  cursor-pointer align-middle` : 'hidden'} size={30} onClick={handleLogout}/>
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