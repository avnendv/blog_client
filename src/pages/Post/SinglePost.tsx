import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';

import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import HomeIcon from '@mui/icons-material/Home';

function SinglePost() {
  return (
    <div className="p-4">
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/" className="flex items-center hover:underline">
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Trang chủ
        </Link>
        <Typography sx={{ display: 'flex', alignItems: 'center' }} color="text.primary">
          Chi tiết post
        </Typography>
      </Breadcrumbs>
      <div className="flex justify-between gap-2 mt-4">
        <h1 className="mt-2 text-3xl">The Impact of Technology on the Workplace: How Technology is Changing</h1>
        <div className="min-w-[80px]">
          <IconButton aria-label="bookmark">
            <BookmarkBorderOutlinedIcon />
          </IconButton>
          <IconButton aria-label="more action">
            <MoreHorizOutlinedIcon />
          </IconButton>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2 mt-2 text-sm text-av-text-gray">
        <div className="flex items-center gap-2">
          <Avatar sx={{ width: 28, height: 28 }} alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
          <span className="font-medium">Remy Sharp</span>
        </div>
        |
        <div>
          <time>August 20, 2022</time>
          &nbsp; &#x2022;&nbsp;
          <span>14 min read</span>
        </div>
      </div>
      <div className="py-12">
        Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates
        memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you dont
        plan and prepare adequately. In this blog article, well explore tips and tricks for a memorable journey and how
        to make the most of your travels. One of the most rewarding aspects of traveling is immersing yourself in the
        local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and
        interacting with locals. Learning a few phrases in the local language can also go a long way in making
        connections and showing respect. Traveling is an enriching experience that opens up new horizons, exposes us to
        different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and
        overwhelming, especially if you dont plan and prepare adequately. In this blog article, well explore tips and
        tricks for a memorable journey and how to make the most of your travels. One of the most rewarding aspects of
        traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending
        cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can
        also go a long way in making connections and showing respect. Traveling is an enriching experience that opens up
        new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling
        can also be stressful and overwhelming, especially if you dont plan and prepare adequately. In this blog
        article, well explore tips and tricks for a memorable journey and how to make the most of your travels. One of
        the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes
        trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few
        phrases in the local language can also go a long way in making connections and showing respect. Traveling is an
        enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that
        last a lifetime. However, traveling can also be stressful and overwhelming, especially if you dont plan and
        prepare adequately. In this blog article, well explore tips and tricks for a memorable journey and how to make
        the most of your travels. One of the most rewarding aspects of traveling is immersing yourself in the local
        culture and customs. This includes trying local cuisine, attending cultural events and festivals, and
        interacting with locals. Learning a few phrases in the local language can also go a long way in making
        connections and showing respect. Traveling is an enriching experience that opens up new horizons, exposes us to
        different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and
        overwhelming, especially if you dont plan and prepare adequately. In this blog article, well explore tips and
        tricks for a memorable journey and how to make the most of your travels. One of the most rewarding aspects of
        traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending
        cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can
        also go a long way in making connections and showing respect. Traveling is an enriching experience that opens up
        new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling
        can also be stressful and overwhelming, especially if you dont plan and prepare adequately. In this blog
        article, well explore tips and tricks for a memorable journey and how to make the most of your travels. One of
        the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes
        trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few
        phrases in the local language can also go a long way in making connections and showing respect. Traveling is an
        enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that
        last a lifetime. However, traveling can also be stressful and overwhelming, especially if you dont plan and
        prepare adequately. In this blog article, well explore tips and tricks for a memorable journey and how to make
        the most of your travels. One of the most rewarding aspects of traveling is immersing yourself in the local
        culture and customs. This includes trying local cuisine, attending cultural events and festivals, and
        interacting with locals. Learning a few phrases in the local language can also go a long way in making
        connections and showing respect. Traveling is an enriching experience that opens up new horizons, exposes us to
        different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and
        overwhelming, especially if you dont plan and prepare adequately. In this blog article, well explore tips and
        tricks for a memorable journey and how to make the most of your travels. One of the most rewarding aspects of
        traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending
        cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can
        also go a long way in making connections and showing respect.
      </div>
      <ul>
        <li className="px-2 py-1 rounded-md line-clamp-1 bg-av-primary-light text-av-primary w-fit cursor-pointer max-w-[33%]">
          #Technology
        </li>
      </ul>
    </div>
  );
}

export default SinglePost;
