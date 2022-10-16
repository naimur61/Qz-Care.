import { AcademicCapIcon, HandThumbDownIcon } from '@heroicons/react/24/solid';
import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

export const RightMarksContext = createContext(0);
export const WrongMarksContext = createContext(0);

const Questions = () => {
   const { data } = useLoaderData();
   const { name, questions } = data;
   // console.log(data);


   const [showRight, setShowRight] = useState(0);
   const [showWrong, setShowWrong] = useState(0);


   return (
      <RightMarksContext.Provider value={[showRight, setShowRight]}>
         <WrongMarksContext.Provider value={[showWrong, setShowWrong]}>
            <div className='mt-10 text-cyan-500'>
               <h1 className='mx-auto text-center font-serif font-dbold text-4xl'>Quiz of {name}</h1>

               <div className='md:grid grid-cols-4 '>
                  <div className=' col-span-3'>
                     {
                        questions.map(question => <Question
                           key={question.id}
                           topicQuestion={question}
                        ></Question>)
                     }
                  </div>
                  <div className=' sticky top-20 h-11'>
                     <div className=' mx-auto text-center flex items-center justify-start gap-5 border-2 shadow-lg border-cyan-500 rounded-md w-11/12 font-serif font-bold mt-10 p-5'>
                        <AcademicCapIcon className='w-8 h-8 text-green-600 ' />
                        <p> Your Correct score is : {showRight}</p>
                     </div>
                     <div className=' mx-auto text-center flex items-center justify-start gap-5 border-2 shadow-lg border-cyan-500 rounded-md w-11/12 font-serif font-bold mt-10 p-5'>
                        <HandThumbDownIcon className='w-8 h-8 text-red-500 ' />
                        <p> Your Mistake score is : {showWrong}</p>
                     </div>
                  </div>
               </div>
            </div>
         </WrongMarksContext.Provider>
      </RightMarksContext.Provider>
   );
};

export default Questions;