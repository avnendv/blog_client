import { useState, SyntheticEvent } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ListPost from './components/ListPost';
import { useAccountPostsQuery } from '@/queries/Account';
import { useQueryString } from '@/utils';
import { PUBLISH } from '@/configs/constants';
import Spinner from '@/components/Spinner/Spinner';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const LIMIT = 10;

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function SelfPosts() {
  const [value, setValue] = useState(PUBLISH.DRAFT);
  const { page } = useQueryString();
  const accountPostsQuery = useAccountPostsQuery({ limit: LIMIT, page, publish: value });

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className='px-4'>
      <h1 className='py-6'>Bài viết của tôi</h1>
      <Box sx={{ width: '100%' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab value={PUBLISH.PUBLISHED} label='Đã xuất bản' />
          <Tab value={PUBLISH.DRAFT} label='Nháp' />
        </Tabs>
      </Box>
      <div className='mt-4'>
        {accountPostsQuery.isFetching || accountPostsQuery.isLoading ? (
          <Spinner />
        ) : (
          <>
            <CustomTabPanel value={value} index={PUBLISH.PUBLISHED}>
              <ListPost
                publish={value}
                data={accountPostsQuery.data?.data}
                paginate={accountPostsQuery.data?.pagination}
              />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={PUBLISH.DRAFT}>
              <ListPost
                publish={value}
                data={accountPostsQuery.data?.data}
                paginate={accountPostsQuery.data?.pagination}
              />
            </CustomTabPanel>
          </>
        )}
      </div>
    </div>
  );
}

export default SelfPosts;
