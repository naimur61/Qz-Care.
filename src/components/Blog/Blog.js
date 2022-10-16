import React from 'react';
import './Blog.css'

const Blog = () => {
   return (
      <div className='bg text-white font-serif font-bold mx-auto text-center container md:px-20 px-10 p-5 my-10'>
         <div className='q-div p-5 mx-5 my-10'>
            <h1>What is the purpose of react router ?</h1><br />
            <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
         </div>
         <div className='q-div p-5 mx-5 my-10'>
            <h1>How does context api work ?</h1><br />
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
         </div>
         <div className='q-div p-5 mx-5 my-10'>
            <h1>What is React useRef Hook ?</h1><br />
            <p>The useRef Hook allows you to persist values between renders.
               It can be used to store a mutable value that does not cause a re-render when updated.
               It can be used to access a DOM element directly.</p>
         </div>
      </div>
   );
};

export default Blog;