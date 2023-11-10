import { Link } from 'react-router-dom';

interface Props {
  classProp?: string;
}
function CardPostGallery({ classProp }: Props) {
  return (
    <div
      className={`relative min-h-[280px] rounded-lg before:bg-av-bg-before before:w-full before:h-full before:absolute before:z-10 before:top-0 before:left-0 ${classProp}`}
    >
      <img
        className="absolute top-0 left-0 object-cover w-full h-full rounded-lg"
        src="https://statics.cdn.200lab.io/2023/09/Blog7.png?fm=webp&auto=format,compress&q=30&width=700"
        alt=""
      />
      <div className="absolute bottom-0 left-0 z-20 w-full p-2">
        <time className="text-av-text-gray"> Sep 21, 2023</time>
        <Link to="#" className="text-2xl font-semibold text-white hover:text-av-primary line-clamp-2">
          The Impact of Technology on the Workplace: How Technology is Changing
        </Link>
      </div>
    </div>
  );
}

export default CardPostGallery;
