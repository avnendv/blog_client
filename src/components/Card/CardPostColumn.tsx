import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

function CardPostColumn() {
  return (
    <div className="flex flex-col gap-4 p-4 border rounded-xl border-av-gray dark:border-av-gray-dark">
      <img className="rounded-md" src="https://mui.com/static/images/cards/contemplative-reptile.jpg" alt="" />
      <ul>
        <li className="px-2 py-1 rounded-md line-clamp-1 bg-av-primary-light text-av-primary w-fit cursor-pointer max-w-[33%]">
          Technology
        </li>
      </ul>
      <Link to="#" className="text-2xl font-semibold hover:text-av-primary line-clamp-2">
        The Impact of Technology on the Workplace: How Technology is Changing
      </Link>
      <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-av-text-gray">
        <div className="flex items-center gap-4">
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
          <span className="font-medium">Remy Sharp</span>
        </div>
        <div>
          <time>August 20, 2022</time>
          &nbsp; &#x2022;&nbsp;
          <span>14 min read</span>
        </div>
      </div>
    </div>
  );
}

export default CardPostColumn;
