import IntroTitle from '../IntroTitle';
import CardPostGallery from './CardPostGallery';

interface Props {
  title?: string;
}

function ListCardPostGallery({ title }: Props) {
  return (
    <div className="px-4 py-8">
      <IntroTitle title={title ?? 'Bài viết nổi bật'} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <CardPostGallery classProp="md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3" />
        <CardPostGallery />
        <CardPostGallery />
      </div>
    </div>
  );
}

export default ListCardPostGallery;
