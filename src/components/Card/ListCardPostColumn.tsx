import IntroTitle from '../IntroTitle';
import CardPostColumn from './CardPostColumn';

interface Props {
  title?: string;
}

function ListCardPostColumn({ title }: Props) {
  return (
    <div className="px-4 py-8">
      <IntroTitle title={title ?? 'Bài viết mới'} linkAll="#" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <CardPostColumn />
        <CardPostColumn />
        <CardPostColumn />
        <CardPostColumn />
        <CardPostColumn />
      </div>
    </div>
  );
}

export default ListCardPostColumn;
