import { FaFolderMinus } from 'react-icons/fa'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="absolute top-0 bg-amber-400 w-screen h-20 flex justify-center space-between">
            <h1 className="text-white font-black bg-red-500 flex items-center text-2xl">Tempura</h1>
            <Link to='/login'>Login</Link>
          
            <FaFolderMinus />
        </div>
    );
};

export default Header;