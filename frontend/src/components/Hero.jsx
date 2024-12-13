import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='py-5'>
      <div className='flex justify-center'>
        <div className='p-5 flex flex-col items-center bg-light w-3/4 rounded-lg shadow-lg'>
          <h1 className='text-center mb-4 text-3xl font-bold'>MERN Authentication</h1>
          <p className='text-center mb-4 text-lg'>
            This is a boilerplate for MERN authentication that stores a JWT in
            an HTTP-Only cookie. It also uses Redux Toolkit and the Tailwind CSS.
          </p>
          <div className='flex'>
            <Link
              to='/login'
              className='px-6 py-2 no-underline bg-blue-600 text-white rounded-lg mr-3 hover:bg-blue-700'
            >
              Sign In
            </Link>
            <Link
              to='/register'
              className='px-6 py-2 no-underline bg-slate-600 text-white rounded-lg mr-3 hover:bg-blue-700'
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


