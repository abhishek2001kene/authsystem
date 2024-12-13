import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <Spinner
      animation='border'
      role='status'
      className='w-24 h-24 mx-auto block'
    ></Spinner>
  );
};

export default Loader;


