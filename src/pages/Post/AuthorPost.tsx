import CardAuthor from './components/CardAuthor';
import ListCardPostGallery from '@/components/Card/ListCardPostGallery';
import ListCardPostColumn from '@/components/Card/ListCardPostColumn';

function AuthorPost() {
  return (
    <section className="pt-8">
      <CardAuthor />
      <ListCardPostGallery />
      <ListCardPostColumn />
    </section>
  );
}

export default AuthorPost;
