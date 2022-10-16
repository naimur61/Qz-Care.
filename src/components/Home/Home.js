import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';
import './Home.css'


const Home = () => {


   const { data } = useLoaderData();
   // console.log(data);
   return (
      <div className='mx-auto container md:px-20 px-10 my-10'>
         <div className='header-div-bg px-14 py-24 text-white'>
            <h1 className=' text-3xl font-serif font-bold  header-div px-5 py-10'>Best Online Quizzes</h1>
            <br /><br /><br />
            <p className=' text-lg font-mono font-bold  header-div px-5 py-10'>
               Keeping yourself entertained and educated is just a quiz away. Want to have some fun or learn about a topic? Curated to learn while having fun, our online quizzes are an excellent source of knowledge and entertainment. Take a quiz today to discover amazing facts about yourself or the world.

               Have 5 minutes to kill or the entire weekend to do something fun? These online quizzes on a variety of topics from TV shows, trivia, sports, movies, music, and fashion to psychology, anime, art, technology, and more are perfect for you! Take quizzes with your friends to see who wins, or get bragging rights as the top-ranked player in our quiz community. So let’s begin!</p>
         </div>
         <div className=' md:grid grid-cols-2 mt-5 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            {
               data.map(topics => <Topics
                  key={data.id}
                  topics={topics}
               ></Topics>)
            }
         </div>
      </div>
   );
};

export default Home;