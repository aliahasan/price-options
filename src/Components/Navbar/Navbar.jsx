import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Link from "../Link/Link";

const Navbar = () => {

    const [open , setOpen] = useState(false);

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'NotFound', path: '*' },
      ];

    return (
        <nav className="text-white bg-green-600 p-6">
           <div className="md:hidden" onClick={()=> setOpen(!open)}>
            {
                open === true ? <IoClose className="text-2xl"></IoClose> :  <FiMenu className="text-2xl "></FiMenu> 
            }
          
           </div>
           <ul className={`md:flex duration-1000 absolute md:static bg-green-600 px-6   
           ${open ? 'top-16' : '-top-60' }
           `}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
           </ul>
        </nav>
    );
};

export default Navbar;