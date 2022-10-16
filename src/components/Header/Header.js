import React, { useState } from 'react';
import { Bars3Icon, Square3Stack3DIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';
import './header.css'


const Header = () => {
   const [open, setOpen] = useState(false);


   return (
      <div className='flex justify-between  mx-auto container md:px-20 px-10 items-center py-5 font-extrabold'>
         <div className='text-4xl font-serif font-bold text-cyan-500 flex items-center'>
            <Square3Stack3DIcon className="h-7 w-7  font-extrabold " /><h1> Qz <span className='font-sans text-2xl text-slate-500'>CARE</span>.</h1>
         </div>
         <div className=' justify-around gap-5 text-slate-500 font-serif'>
            <ul className={`md:flex justify-end gap-5 md:static absolute duration-500 ease-out ${open ? 'top-16 bg-opacity-80 bg-cyan-300 p-5 right-1 weight' : 'top-[-200px] right-3'} custom`}>
               <li><NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/topics'>Topics</NavLink></li>
               <li><NavLink to='/statics'>Statics</NavLink></li>
               <li><NavLink to='/blog'>Blog</NavLink></li>
            </ul>


            <div onClick={() => setOpen(!open)} className="h-10 w-10  font-extrabold md:hidden text-cyan-500" ><Link>
               {
                  open ? <XMarkIcon /> : <Bars3Icon />
               }
            </Link>
            </div>
         </div>
      </div >
   );
};

export default Header;