import Divider from '@mui/material/Divider';
import Switch from '@mui/material/Switch';

function SettingNotifications() {
  return (
    <div>
      <h2>Email</h2>
      <Divider />
      <div className='mt-4'>
        <div>Gửi email cho tôi khi có:</div>
        <div className='flex items-center justify-between ml-4'>
          Bài viết mới
          <Switch defaultChecked color='warning' />
        </div>
      </div>
      <h2 className='mt-6'>Thông báo</h2>
      <Divider />
      <div className='mt-4'>
        <div>Gửi thông báo cho tôi khi có:</div>
        <div className='flex items-center justify-between ml-4'>
          Bài viết mới
          <Switch defaultChecked color='warning' />
        </div>
        <div className='flex items-center justify-between ml-4'>
          Nhắc đến trong bình luận
          <Switch defaultChecked color='warning' />
        </div>
        <div className='flex items-center justify-between ml-4'>
          Trả lời bình luận
          <Switch defaultChecked color='warning' />
        </div>
        <div className='flex items-center justify-between ml-4'>
          Cảm xúc trong bình luận
          <Switch defaultChecked color='warning' />
        </div>
      </div>
    </div>
  );
}

export default SettingNotifications;
