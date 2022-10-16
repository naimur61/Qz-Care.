import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RightMarksContext, WrongMarksContext } from '../Questions/Questions';
import './Question.css'

const Question = ({ topicQuestion }) => {
   const { question, correctAnswer, options } = topicQuestion;

   const [showRight, setShowRight] = useContext(RightMarksContext);
   const [showWrong, setShowWrong] = useContext(WrongMarksContext);


   const select = (selectAns) => {

      if (correctAnswer === selectAns) {
         // // display Right
         const newRight = parseInt(showRight) + 1;
         setShowRight(newRight)

         // Toast 
         toast.success('Right Answer!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
         });
      }
      else {
         // display Wrong
         const newWrong = parseInt(showWrong) + 1;
         setShowWrong(newWrong)

         // Toast 
         toast.error('Wrong Answer!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
         });
      }
   };

   const [open, setOpen] = useState([false]);
   if (!open) {
      toast.info(`Right Answer is - 
      " ${correctAnswer} "`,
         {
            id: 1,
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
         })
      // alert(`Right Answer is - 
      // // " ${correctAnswer} "`);
   }


   // console.log(options);
   return (
      <div className='container mx-auto border-2 border-cyan-300 shadow-lg rounded-md p-5 mt-8 w-11/12  lg:w-9/12 '>
         <div>
            <div className=' font-serif  font-bold  flex justify-between gap-10'>
               <h3 className='text-center text-xl p-5 mx-auto'>Quiz  <span className='counter'></span> : {question.slice(3, -4)}
               </h3>
               <div onClick={() => setOpen(!open)}>
                  {open ? <EyeSlashIcon className='w-5 h-5 cursor-pointer' /> : <EyeIcon className='w-5 h-5 cursor-pointer' />}
               </div>
            </div>

            <div className=' w-fit mx-auto cursor-pointer  grid grid-cols-2 gap-5'>
               {options.map(option =>
                  <div className='border-2 rounded-md hover:bg-cyan-400 hover:text-white duration-500 ease-out w-full p-3 flex items-center gap-5 '>
                     <input type="radio" id={option} name="Option" value="HTML" />
                     <label onClick={() => select(option)} className=' font-mono font-light flex-wrap overflow-hidden ' for={option}> {option}</label>
                  </div>
               )}
            </div>
         </div>
         <ToastContainer />
      </div>
   );
};

export default Question;