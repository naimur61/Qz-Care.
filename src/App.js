import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Questions from './components/Questions/Questions';
import Statics from './components/Statics/Statics';
import HadeLayout from './Layout/HadeLayout';

function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <HadeLayout></HadeLayout>, children: [
        {
          path: '/', loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          }, element: <Home></Home>
        },
        {
          path: '/topics', loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          }, element: <Home></Home>
        },

        { path: '/question/:id', loader: async ({ params }) => { return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`) }, element: <Questions></Questions> },

        {
          path: '/statics', loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          }, element: <Statics></Statics>
        },
        { path: '/blog', element: <Blog></Blog> },


        {
          path: '*', element: <div className='mx-auto font-serif text-red-500 mt-5 p-5 border-cyan-500 border-4 rounded-md text-center  w-4/12'>
            <h1 className=' text-5xl'>404 !</h1>
            <p className=' text-3xl text-yellow-500'>We don't found your page.</p>
          </div>
        }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;