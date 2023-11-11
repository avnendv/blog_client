import { useParams } from 'react-router-dom';

import CardAuthor from './components/CardAuthor';
// import ListCardPostGallery from '@/components/Card/ListCardPostGallery';
import ListCardPostColumn from '@/components/Card/ListCardPostColumn';

import { useQueryString } from '@/utils';
import { usePostAuthorQuery } from '@/queries/Post';
import Spinner from '@/components/Spinner/Spinner';

const LIMIT = 12;

function AuthorPost() {
  const { slug } = useParams();

  const { page } = useQueryString();
  const postAuthorQuery = usePostAuthorQuery({ limit: LIMIT, page, slug: slug || '' });

  return (
    <section className='pt-8'>
      {postAuthorQuery.isLoading ? (
        <Spinner />
      ) : (
        <>
          <CardAuthor />
          {/* <ListCardPostGallery /> */}
          <ListCardPostColumn
            data={postAuthorQuery.data?.data}
            showPagination
            pagination={postAuthorQuery.data?.pagination}
          />
        </>
      )}
    </section>
  );
}

export default AuthorPost;
