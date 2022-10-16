import { ArrowSmallRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const Topics = ({ topics }) => {
   const { id, logo, name, total, } = topics;
   // console.log(topics);

   return (
      <div className='border-2 w-74 border-cyan-500 p-5 mt-5 rounded-md overflow-hidden'>
         <img className='border' src={logo} alt="" />
         <div className='flex justify-between items-center my-5 font-bold font-serif'>
            <h4>{name}</h4>
            <h4>Questions: {total}</h4>
         </div>
         <Link to={`/question/${id}`} className='font-extrabold text-white bg-cyan-500 px-5 rounded-md py-1 hover:bg-cyan-600 float-right'>Start Practice <ArrowSmallRightIcon className="h-6 w-6  inline" /></Link>
      </div>
   );
};

export default Topics;