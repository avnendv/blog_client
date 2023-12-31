import { useParams } from 'react-router-dom';

import CardAuthor from './components/CardAuthor';
import ListCardPostGallery from '@/components/Card/ListCardPostGallery';
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
          <CardAuthor author={postAuthorQuery.data?.data.author} />
          <ListCardPostGallery data={postAuthorQuery.data?.data.trending} />
          <ListCardPostColumn
            data={postAuthorQuery.data?.data.posts}
            showPagination
            pagination={postAuthorQuery.data?.pagination}
          />
        </>
      )}
    </section>
  );
}

export default AuthorPost;
