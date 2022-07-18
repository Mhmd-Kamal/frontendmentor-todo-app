import Head from 'next/head';
import Image from 'next/image';

const Home = () => {
  const todos = [
    { id: 1, title: 'Learn Next.js', completed: true },
    { id: 2, title: 'Learn React', completed: false },
    { id: 3, title: 'Learn Tailwind', completed: false },
    { id: 4, title: 'Learn Styled-Components', completed: false },
    { id: 5, title: 'Learn GraphQL', completed: false },
    { id: 6, title: 'Learn Apollo', completed: false },
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
        <div className='w-full bg-white rounded-md'>
          <form
            action='handleSubmit'
            className='flex items-stretch gap-3 px-6 py-4'
          >
            <input
              className='w-6 h-6 border rounded-full appearance-none border-light-Very-Light-Grayish-Blue focus:outline-none checked:gradient'
              type='checkbox'
              name='completed checkbox'
              id='completed_checkbox'
            />
            <input
              className='text-light-Very-Dark-Grayish-Blue focus:outline-none placeholder:text-xs'
              placeholder='Create a new todo...'
              type='text'
              name='new todo'
              id='new_todo'
            />
          </form>
        </div>
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
