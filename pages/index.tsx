import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <Head>
        <title>Next.js and TailwindCSS Starter Template</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center'>
        <div className='p-6 shadow-2xl shadow-blue-400 rounded-2xl cursor-pointer'>
          <h1 className='text-4xl'>
            Start creating your{' '}
            <span className='font-bold text-blue-500'>App</span> with{' '}
            <span className='font-bold text-purple-500'>Next.js</span> and{' '}
            <span className='font-bold text-green-500'>TailwindCSS</span>
          </h1>
        </div>
      </main>
    </div>
  );
};

export default Home;
