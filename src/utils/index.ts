import { useSearchParams } from 'react-router-dom';

export * from './helper';
export * from './time';

export const useQueryString = () => {
  const [searchParams] = useSearchParams();
  const searchParamsObject = Object.fromEntries([...searchParams]);
  return searchParamsObject;
};
