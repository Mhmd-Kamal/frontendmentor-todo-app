import Head from 'next/head';
import Image from 'next/image';

import NewTodo from '../components/NewTodo';
import TodosList from '../components/TodosList';

const Home = () => {
  const todos = [
    { id: 1, text: 'Learn Next.js', status: true },
    { id: 2, text: 'Learn React', status: false },
    { id: 3, text: 'Learn Tailwind', status: false },
    { id: 4, text: 'Learn Styled-Components', status: false },
    { id: 5, text: 'Learn GraphQL', status: false },
    { id: 6, text: 'Learn Apollo', status: false },
  ];
  return (
    <div className='flex flex-col items-stretch min-h-screen px-5 text-sm bg-no-repeat bg-mobile-light bg-light-Very-Light-Gray'>
      {/* TODO: add head tag. */}
      <header className='flex items-baseline justify-between w-full py-8'>
        <h1 className='text-2xl font-bold tracking-[0.4em] text-light-Very-Light-Gray'>
          TODO
        </h1>
        <button>
          <img className='w-5' src='/icon-moon.svg' alt='theme selector' />
        </button>
      </header>
      <main className='flex-grow '>
        <NewTodo />
        <TodosList todos={todos} />
      </main>
      <footer className=''>
        <p className='pb-16 text-sm text-center text-light-Dark-Grayish-Blue'>
          Drag and drop to reorder list
        </p>
      </footer>
    </div>
  );
};

export default Home;
