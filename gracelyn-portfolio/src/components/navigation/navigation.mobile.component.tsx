import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavigationMobile() {
    const [showMenu, toggleMenu] = useState(false);

    const menuIcon =    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

    const closeIcon =   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
  
    const homeIcon =    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>

    const aboutIcon =   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>

    const contactIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                        </svg>
  
  
  
    return (
        <div className="absolute top-0 left-0 z-50 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            {!showMenu ? 
            <div onClick={() => toggleMenu(!showMenu)} className="text-white pl-2 pt-2">
                {menuIcon}
            </div>
            :
            <div className="w-[70dvw] h-screen bg-black bg-opacity-75 text-white pl-2 pt-4">
                <div className="flex w-[75%] h-[10%] items-center justify-around" onClick={() => toggleMenu(!showMenu)}>
                    <div onClick={() => toggleMenu(!showMenu)} className="w-full flex items-center justify-around">
                        {closeIcon}
                        <p className="text-[36px] w-[50%]">Close</p>
                    </div>
                </div>
                <div className="flex w-[75%] h-[10%]">
                    <Link to="/" onClick={() => toggleMenu(!showMenu)} className="w-full flex items-center justify-around">
                        {homeIcon}
                        <p className="text-[36px] w-[50%]">Home</p>
                    </Link>
                </div>
                <div className="flex w-[75%] h-[10%]">
                    <Link to="/about" onClick={() => toggleMenu(!showMenu)} className="w-full flex items-center justify-around">
                        {aboutIcon}
                        <p className="text-[36px] w-[50%]">About</p>
                    </Link>
                </div>
                <div className="flex w-[75%] h-[10%]">
                    <Link to="/contact" onClick={() => toggleMenu(!showMenu)} className="w-full flex items-center justify-around">
                        {contactIcon}
                        <p className="text-[36px] w-[50%]">Contact</p>
                    </Link>
                </div>
            </div>
            }
        </div>
    )
}