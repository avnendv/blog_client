import { Link } from 'react-router-dom';

function _404Page() {
  return (
    <div className='text-center py-36'>
      <h1 className='text-9xl'>404</h1>
      <p className='py-10'>Trang bạn đang tìm kiếm không tồn tại!</p>
      <Link to='/' className='hover:underline hover:text-av-primary'>
        Quay về trang chủ
      </Link>
    </div>
  );
}

export default _404Page;
