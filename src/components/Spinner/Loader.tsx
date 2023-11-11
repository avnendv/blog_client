import './loader.scss';

function Loader() {
  return (
    <div className='fixed top-0 left-0 flex items-center justify-center w-screen h-screen overflow-hidden'>
      <div className='loader'></div>
    </div>
  );
}

export default Loader;
