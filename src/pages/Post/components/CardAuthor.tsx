import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function CardAuthor() {
  return (
    <div className="p-12 bg-av-gray dark:bg-av-gray-dark rounded-xl">
      <div className="max-w-[668px] flex flex-col items-center justify-center gap-4 m-auto">
        <div className="flex items-center gap-4">
          <Avatar sx={{ width: 64, height: 64 }} alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
          <div>
            <h3>Jonathan Doe</h3>
            <p className="text-av-text-gray">Collaborator & Editor</p>
          </div>
        </div>
        <p className="text-center text-av-text-gray">
          Meet Jonathan Doe, a passionate writer and blogger with a love for technology and travel. Jonathan holds a
          degree in Computer Science and has spent years working in the tech industry, gaining a deep understanding of
          the impact technology has on our lives.
        </p>
        <ul className="flex gap-2 pt-4">
          <li>
            <Link
              to="#"
              className="p-2 transition-all duration-300 border rounded-md bg-[#696A75] group hover:bg-av-primary hover:border-av-primary"
            >
              <TwitterIcon className="text-white" />
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="p-2 transition-all duration-300 border rounded-md bg-[#696A75] group hover:bg-av-primary hover:border-av-primary"
            >
              <FacebookIcon className="text-white" />
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="p-2 transition-all duration-300 border rounded-md bg-[#696A75] group hover:bg-av-primary hover:border-av-primary"
            >
              <InstagramIcon className="text-white" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CardAuthor;
