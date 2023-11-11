import { Link } from 'react-router-dom';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <div className='bg-[#F6F6F7] dark:bg-[unset] mt-4 p-2 border-t border-av-gray dark:border-av-gray-dark text-sm'>
      <div className='flex flex-wrap justify-between py-8 gap-y-4'>
        <div className='basis-1/2 max-w-1/2 sm:basis-1/4 sm:max-w-1/4'>
          <h6 className='mb-2 text-xl font-medium'>
            <strong>AV</strong>Blog
          </h6>
          <p>AVNENDV</p>
        </div>
        <div className='basis-1/2 max-w-1/2 sm:basis-1/4 sm:max-w-1/4'>
          <h6 className='mb-2 text-xl font-medium'>Blogs</h6>
          <ul className='flex flex-col gap-2'>
            <li>Travel</li>
            <li>Technology</li>
            <li>Lifestyle</li>
            <li>Fashion</li>
            <li>Business</li>
          </ul>
        </div>
        <div className='basis-1/2 max-w-1/2 sm:basis-1/4 sm:max-w-1/4'>
          <h6 className='mb-2 text-xl font-medium'>Quick Links</h6>
          <ul className='flex flex-col gap-2'>
            <li>FAQ</li>
            <li>Terms & Conditions</li>
            <li>Support</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='basis-1/2 max-w-1/2 sm:basis-1/4 sm:max-w-1/4'>
          <h6 className='mb-5 text-xl font-medium'>Subscribe For Newsletter</h6>
          <div className='flex h-12'>
            <input className='h-full pl-2 text-gray-500 basis-3/4 rounded-s-md' type='text' placeholder='Your Email' />
            <button className='h-full px-1 text-white basis-1/4 bg-av-primary rounded-e-md'>Subcribe</button>
          </div>
          <h6 className='mt-10 mb-4 text-xl font-medium'>Follow On:</h6>
          <ul className='flex gap-2'>
            <li>
              <Link
                to='#'
                className='p-2 transition-all duration-300 border rounded-md group hover:bg-av-primary hover:border-av-primary'
              >
                <TwitterIcon className='group-hover:text-white' />
              </Link>
            </li>
            <li>
              <Link
                to='#'
                className='p-2 transition-all duration-300 border rounded-md group hover:bg-av-primary hover:border-av-primary'
              >
                <FacebookIcon className='group-hover:text-white' />
              </Link>
            </li>
            <li>
              <Link
                to='#'
                className='p-2 transition-all duration-300 border rounded-md group hover:bg-av-primary hover:border-av-primary'
              >
                <InstagramIcon className='group-hover:text-white' />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className='w-4/5 p-1 m-auto' />
      <p className='text-center'>
        Copyright &copy; 2023 |{' '}
        <Link to='/' className='text-av-primary'>
          AVNENDV
        </Link>
      </p>
    </div>
  );
}

export default Footer;
