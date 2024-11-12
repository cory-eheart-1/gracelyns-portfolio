import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavigationMobile() {
    const [showMenu, toggleMenu] = useState(false);

    const menuIcon =    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

    const closeIcon =   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
  
    const homeIcon =    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>

    const aboutIcon =   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
  
  
    return (
        <div className="absolute top-0 left-0 z-50 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            {!showMenu ? 
            <div onClick={() => toggleMenu(!showMenu)} className="text-white pl-2 pt-2">
                {menuIcon}
            </div>
            :
            <div className="w-[75vw] h-screen bg-black bg-opacity-75 text-white pl-2 pt-2">
                <div className="flex w-[75%] h-[5%]" onClick={() => toggleMenu(!showMenu)}>
                    {closeIcon}
                    <p>Close</p>
                </div>
                <div className="w-[75%] h-[5%]">
                    <Link to="/" onClick={() => toggleMenu(!showMenu)} className="flex">
                        {homeIcon}
                        <p>Home</p>
                    </Link>
                </div>
                <div className="w-[75%] h-[5%]">
                    <Link to="/about" onClick={() => toggleMenu(!showMenu)} className="flex">
                        {aboutIcon}
                        <p>About</p>
                    </Link>
                </div>
            </div>
            }
        </div>
    )
}