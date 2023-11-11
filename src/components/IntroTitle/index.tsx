import { Link } from 'react-router-dom';

import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface Props {
  title?: string;
  linkAll?: string;
}

function IntroTitle({ title, linkAll }: Props) {
  return (
    <div className='flex items-center justify-between mb-8'>
      <div className='flex items-center gap-4'>
        <SignalCellularAltIcon className='rotate-90 text-av-primary' />
        <h4 className='text-2xl font-bold uppercase'>{title}</h4>
      </div>
      {linkAll && (
        <Link to={linkAll} className='duration-150 group hover:text-av-primary'>
          Xem tất cả
          <ArrowForwardIcon className='ml-2 duration-150 group-hover:translate-x-1' />
        </Link>
      )}
    </div>
  );
}

export default IntroTitle;
