import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import { BASE_URL_API } from '@/configs/env';
function ButtonGroupSocial() {
  return (
    <div className='flex items-center justify-center gap-4 my-4 text-center'>
      <button
        className='p-2 transition duration-300 rounded-full bg-av-gray-dark hover:bg-av-primary hover:ease-in-out'
        onClick={() => window.open(`${BASE_URL_API}/google`, '_self')}
      >
        <GoogleIcon />
      </button>
      <button
        className='p-2 transition duration-300 rounded-full bg-av-gray-dark hover:bg-av-primary hover:ease-in-out'
        onClick={() => window.open(`${BASE_URL_API}/facebook`, '_self')}
      >
        <FacebookIcon />
      </button>
      <button
        className='p-2 transition duration-300 rounded-full bg-av-gray-dark hover:bg-av-primary hover:ease-in-out'
        onClick={() => window.open(`${BASE_URL_API}/github`, '_self')}
      >
        <GitHubIcon />
      </button>
    </div>
  );
}

export default ButtonGroupSocial;
