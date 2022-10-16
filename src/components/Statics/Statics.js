import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statics = () => {
   const { data } = useLoaderData();
   // console.log(data);

   return (
      <div className='flex justify-center items-center container   md:px-20 px-10 my-20'>
         <ResponsiveContainer width='100%' aspect={3}>
            <LineChart width={900} height={550} data={data} margin={{ top: 5, right: 25, bottom: 5, left: -5 }
            } >
               <Line type='monotone' dataKey='total' stroke="#8884d8" />
               <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
               <XAxis dataKey='name' tick={{ stroke: "aqua" }} />
               <YAxis />
               <Tooltip />
            </LineChart>
         </ResponsiveContainer>
      </div>
   );
};

export default Statics;